const users = [
    { name: "Mike", age: 10 },
    { name: "Victor", age: 20 },
  ];
  const adultUsers = users.filter(filterAdultUsers);
  function filterAdultUsers(user) {
    return user.age >= 18;
  }
  const adultUsersNames = adultUsers.map(getNames);
  function getNames(user) {
    return user.name;
  }
  console.log(adultUsersNames);