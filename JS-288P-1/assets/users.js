async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const usersWrapper = document.getElementById("users");
    data.forEach((user) => {
      const userElement = document.createElement("div");
      userElement.classList.add("col-lg-3", "col-md-6", "my-3");
      userElement.innerHTML = `
            <div class="card h-100" style="width: 18rem;">
            <div class="card-body card-user">
              <h5 class="card-title">${user.name} ${user.username}</h5>
              <p class="card-text"><i class="bi bi-geo-alt-fill"></i> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
              <p class="card-text"><i class="bi bi-building-fill"></i> ${user.company.name}</p>
              <p class="card-text"><i class="bi bi-envelope-fill"></i> ${user.email}</p>
              <p class="card-text"><i class="bi bi-telephone-fill"></i> ${user.phone}</p>
              <p class="card-text"><i class="bi bi-globe"></i> ${user.website}</p>
              <a href="posts.html?userId=${user.id}" class="btn btn-outline-info d-flex justify-content-center">Gönderileri Görüntüle</a>
            </div>
          </div>`;
      usersWrapper.appendChild(userElement);
    });
  } catch (error) {
    console.log("Hata: ", error);

  }
}
fetchUsers();