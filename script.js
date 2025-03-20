function performSearch() {
    let query = document.getElementById("searchInput").value.trim();
    let engine = document.getElementById("searchEngine").value;
    
    if (query) {
        window.open(engine + encodeURIComponent(query), "_blank");
    } else {
        alert("请输入搜索关键词！");
    }
}
