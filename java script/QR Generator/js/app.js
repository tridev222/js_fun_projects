document.getElementById('generate-btn').addEventListener('click', function() {
    var url = document.getElementById('url-input').value;
    if (url) {
        var qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = ""; // Clear previous QR code
        var qrcode = new QRCode(qrcodeContainer, {
            text: url,
            width: 300, 
            height: 300 
        });
    } else {
        alert("Please enter a URL");
    }
});
