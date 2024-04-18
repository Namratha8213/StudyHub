<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="table-container">
        <table>
            <tr><th>Material ID</th><th>Subject Name</th><th>File Name</th><th>Upload Date</th></tr>
            <?php
            require 'database.php';

            $sql = "SELECT sm.material_id, sm.file_name, sm.file_path, sm.upload_date, s.subject_name
                    FROM study_materials sm
                    JOIN subjects s ON sm.subject_id = s.subject_id WHERE s.subject_id= 6";

            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // Fetch each row and populate the table
                while ($row = $result->fetch_assoc()) {
                    echo "<tr><td>" . $row["material_id"] . "</td><td>" . $row["subject_name"] . "</td><td>" . $row["file_name"] . "</td><td>" . $row["upload_date"] . "</td></tr>";
                }
            } else {
                echo "<tr><td colspan='5'>No records found</td></tr>";
            }
            ?>
        </table>
    </div>
</body>
</html>