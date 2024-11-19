

export default function Sign() {
    return (
      <div className="flex justify-center mt-28 sm:mb-20 mb-28">

        <form className="h-80 w-80 box-border border-2 rounded-lg pt-5 bg-orange-300" id="form">
        <h1 className="text-center font-bold">SignUp</h1>


        {/* <label htmlFor="e-mail" >E-mail</label><br /> */}
        <p className="mt-4 ml-3 font-bold">E-mail</p>

        <input type="text" id="e-mail" placeholder="Enter your e-mail" required className="rounded-r-lg rounded-l-lg  ml-3 h-8 w-72"/>
        
        {/* <label htmlFor="password">Password</label><br /> */}
        <p className="mt-4 ml-3 font-bold ">Password</p>

        <input type="text" id="e-mail" placeholder="Enter your password" required className="rounded-r-lg rounded-l-lg ml-3 h-8 w-72"/>

        <p className="mt-4 ml-3 font-bold ">Confirm Password</p>

        <input type="text" id="e-mail" placeholder="Enter your confirm password" required className="rounded-r-lg rounded-l-lg ml-3 h-8 w-72"/>
        <br />
 
        <button className="ml-8 mr-2 box-border h-8 w-20  rounded-full bg-accent border mt-4 text-white  hover:text-black">Login</button>or
        <button className="ml-2 box-border h-8 w-36 border-2 rounded-full bg-accent text-white hover:text-black">Create Account</button>
        </form>


      </div>
    );
  }