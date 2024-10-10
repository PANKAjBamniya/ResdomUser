let button = document.querySelector('button');


const fetchRandomUser = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        // console.log(user)
      
        const fullName = `${user.name.first} ${user.name.last}`;
        const location = `${user.location.city}, ${user.location.country}`;
        const email = user.email;
        const picture = user.picture.large;

        document.getElementById('user-info').innerHTML = `
            <img src="${picture}" alt="User Picture">
            <h2>${fullName}</h2>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
};

button.addEventListener('click', fetchRandomUser);
