const owner = "Serjiy";
const repo = "sector9-game.github.io";

fetch(
`https://api.github.com/repos/${owner}/${repo}/releases/latest`
)

.then(response => response.json())

.then(data => {

    const asset = data.assets[0];

    document.getElementById("download-count")
        .textContent = asset.download_count;

    document.getElementById("game-version")
        .textContent = data.tag_name;

});
