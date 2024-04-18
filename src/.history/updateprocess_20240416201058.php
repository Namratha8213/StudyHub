<?php
// Include database connection
include("database.php");

// Check if form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Validate and retrieve form data
  $materialId = $_POST['material_id'];
  $fileName = $_POST['file_name'];
  $filePath = $_POST['file_path'];
  $subjectName = $_POST['subject_name'];

  // Update study material details in the database
  $sql = "UPDATE study_materials 
          SET file_name = ?, file_path = ?
          WHERE material_id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ssi", $fileName, $filePath, $materialId);

  // Execute the update query
  if ($stmt->execute()) {
    // Update successful, redirect to a success page or display a message
    header("Location: update_success.php");
    exit();
  } else {
    // Update failed, display an error message
    echo "Failed to update study material. Please try again.";
  }
} else {
  // Invalid request if not submitted via POST method
  echo "Invalid request.";
}

// Close database connection
$conn->close();
?>
