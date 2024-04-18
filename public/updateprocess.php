<?php
// Include database connection
require 'database.php';
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $materialId = $_POST['material_id'];
    $fileName = $_POST['file_name'];
    $filePath = $_POST['file_path'];

    // Validate form data (you can add more validation here)

    // Update study material details in the database
    $sql = "UPDATE study_materials
            SET file_name = ?, file_path = ?
            WHERE material_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $fileName, $filePath, $materialId);

    if ($stmt->execute()) {
        // Update successful
        echo json_encode(array("success" => true, "message" => "Study material updated successfully."));
    } else {
        // Update failed
        echo json_encode(array("success" => false, "error" => "Error updating study material: " . $stmt->error));
    }

    $stmt->close();
} else {
    // Invalid request method
    echo json_encode(array("success" => false, "error" => "Invalid request method."));
}

// Close database connection
$conn->close();
?>