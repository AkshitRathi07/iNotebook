// User State handle karne ke liye (Login ke baad)
const [user, setUser] = useState({ name: "" });

const getUserData = async () => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: { 'auth-token': localStorage.getItem('token') }
    });
    const json = await response.json();
    setUser({ name: json.name }); // Backend se naam set karein
}