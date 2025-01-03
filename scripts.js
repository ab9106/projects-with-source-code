document.getElementById('progress-bar').addEventListener('input', function() {
    var progress = this.value;
    document.getElementById('progress-value').textContent = progress + '%';
});
