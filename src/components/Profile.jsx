const Profile = (prop) => {
    return (
      <>
        <h1>Name: {prop.name}</h1>
        <h1>Age: {prop.age}</h1>
        <h1>Greeting:{prop.greeting}</h1>
        <h1>{prop.children}</h1>
      </>
    );
  };
  
  export default Profile;
  