const users = {
    firstName: "Mike",
    lastName: "Potter"
};

function setFullName(fullName) {
    this.fullName = fullName;
}

const setUsersFullName = setFullName.bind(users);

setUsersFullName("John Smith");

console.log(users.fullName); 