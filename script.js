function fileValue(value) {
    var path = value.value;
    var extenstion = path.split('.').pop();
    if(extenstion == "pdf" || extenstion == "txt"){
        document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
        var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
        document.getElementById("filename").innerHTML = filename;
    }else{
        alert("File not supported kindly upload pdf!")
    }
}

$("#button").click(function(e) {
    e.preventDefault();
    console.log('wrking!');
    var form_data = new FormData($('#upload-file')[0]);
    $.ajax({
        type: 'POST',
        url: 'https://ajax-pdf-txt.herokuapp.com//upload_file/',
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        success: function(data) {
            $("#tbody").append(`
            <h2>Extracted Text</h2>
                <textarea rows="30" cols="100">
            ${data['Success']}
        </textarea>`
                     )
        },

    });
});