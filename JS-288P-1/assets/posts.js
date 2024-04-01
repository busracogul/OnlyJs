async function fetchPosts() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        const postsWrapper = document.getElementById("posts");

        data.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.classList.add("col-lg-3", "col-md-6", "my-3");
            postElement.innerHTML = `
            <div class="card h-100" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text"> ${post.body}</p>
            </div>
          </div>
        `;
            postsWrapper.appendChild(postElement);
        });
    } catch (err) {
        console.log("Hata: ", err);
    }
}
fetchPosts();