<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document</title>
    <script src=./js/index.js"<>/script>
</head>
<body>
    <input id="nama-depan" name="nama-depan" placeholder="Nama Depan">
    <br />
    <input id="nama-belakang" name="nama-belakang" placeholder="Nama Belakang">
    <button onclick="peringatan()"ini adalah tombol</button>
    <br />
    <script>
    function peringatan(){
        let namaDepan = document.getElementById("nama-depan").value
        let namaBelakang = document.getElementById("nama-belakang").value
        
        console.log(namaDepan + " " + namaBelakang);
        
    }
    </script>
</body>
<!html>