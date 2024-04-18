<?php
// Include database connection
require 'database.php';
header("Content-Type: application/json");

// Check if study material ID is provided via GET parameter
if (isset($_GET['material_id'])) {
    $materialId = $_GET['material_id'];

    // Retrieve file path and delete the associated file
    $sql = "SELECT file_path FROM study_materials WHERE material_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $materialId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $filePath = $row['file_path'];

        // Construct full file path based on script execution context
        $fullFilePath = __DIR__ . '/' . $filePath;

        // Delete file from server
        if (unlink($fullFilePath)) {
            // Successfully deleted file

            // Delete study material record from database
            $deleteSql = "DELETE FROM study_materials WHERE material_id = ?";
            $deleteStmt = $conn->prepare($deleteSql);
            $deleteStmt->bind_param("i", $materialId);

            if ($deleteStmt->execute()) {
                echo json_encode(array("success" => true, "message" => "Study material and file deleted successfully."));
            } else {
                echo json_encode(array("success" => false, "error" => "Error deleting study material: " . $deleteStmt->error));
            }
            $deleteStmt->close();
        } else {
            // Failed to delete file
            echo json_encode(array("success" => false, "error" => "Error deleting file from server."));
        }
    } else {
        echo json_encode(array("success" => false, "error" => "Study material not found."));
    }
} else {
    echo json_encode(array("success" => false, "error" => "Invalid request. Material ID not provided."));
}

// Close database connection
$conn->close();
?>