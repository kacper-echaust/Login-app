import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <main className="flex flex-col h-64 justify-around">
      <div>
        <h1 className="text-3xl text-center font-bold">Welcome to </h1>
        <h1 className="text-3xl text-center">Login Page!</h1>
      </div>
      <div className="flex flex-col h-24 justify-around">
        <Link to="/login">
          <Button className="w-full">Login</Button>
        </Link>
        <Link to="/register">
          <Button variant="outline" className="w-full">
            Register
          </Button>
        </Link>
      </div>
    </main>
  );
};

export { Home };
