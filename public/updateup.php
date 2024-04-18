<?php
// Include database connection
require 'database.php';
header("Content-Type: application/json");

// Check if material ID is provided via GET parameter
if (isset($_GET['material_id'])) {
  $materialId = $_GET['material_id'];

  // Fetch study material details from database
  $sql = "SELECT sm.material_id, sm.file_name, sm.file_path, sm.upload_date, s.subject_name
            FROM study_materials sm
            JOIN subjects s ON sm.subject_id = s.subject_id
            WHERE sm.material_id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("i", $materialId);
  $stmt->execute();
  $result = $stmt->get_result();

  // Check if study material exists
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    // Return JSON response with study material details
    echo json_encode(array("success" => true, "data" => $row));
  } else {
    // Study material not found
    echo json_encode(array("success" => false, "error" => "Study material not found."));
  }
} else {
  // Invalid request. Material ID not provided.
  echo json_encode(array("success" => false, "error" => "Invalid request. Material ID not provided."));
}

// Close database connection
$conn->close();
?>