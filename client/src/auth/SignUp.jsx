// Initialization for ES Users
import { Input, Ripple, initTE } from "tw-elements";

initTE({ Input, Ripple });

function SignUp() {
  return (
    // <section className="gradient-form h-full bg-neutral-200 dark:white">
    //   <div className="container h-full p-10">
    //     <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
    //       <div className="w-full">
    //         <div className="block rounded-lg bg-neutral-800 shadow-lg">
    //           <div className="g-0 lg:flex lg:flex-wrap">
    //             {/* Left column container */}
    //             <div className="px-4 md:px-0 lg:w-6/12">
    //               <div className="md:mx-6 md:p-12">
    //                 {/* Logo */}
    //                 <div className="text-center">
    //                   <img
    //                     className="mx-auto w-48"
    //                     src="../../snapchat.svg"
    //                     alt="logo"
    //                   />
    //                   <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
    //                     Phantom Pals
    //                   </h4>
    //                 </div>

    //                 <form>
    //                   <p className="mb-4 font-semibold">
    //                     Please log in to your account
    //                   </p>
    //                   {/* Username to your account */}
    //                   <div className="relative mb-4" data-te-input-wrapper-init>
    //                     <input
    //                       type="text"
    //                       className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-none focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    //                       placeholder="Username"
    //                       onChange={(e) => e.target.value}
    //                     />
    //                     <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text">
    //                       Username
    //                     </label>
    //                   </div>
    //                   {/* Password Input */}
    //                   <div className="relative mb-4" data-te-input-wrapper-init>
    //                     <input
    //                       type="password"
    //                       className="peer block min-h-[auto] w-full border rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-none focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not(data-te-input-placeholder-active])]:placeholder:opacity-0"
    //                       id="exampleFormControlInput1"
    //                       //   placeholder="Password"
    //                     />
    //                     <label
    //                       htmlFor="exampleFormControlInput1"
    //                       className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    //                     >
    //                       Password
    //                     </label>
    //                   </div>

    //                   {/* Submit button */}
    //                   <div className="mb-12 pb-1 pt-1 text-center">
    //                     <button
    //                       className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] custom-btn-login"
    //                       type="button"
    //                       data-te-ripple-init
    //                       data-te-ripple-color="light"
    //                       style={{
    //                         background:
    //                           "linear-gradient(to right, #ababab, #8d2663, #000000)",
    //                       }}
    //                     >
    //                       Log in
    //                     </button>

    //                     {/* Forgot password link */}
    //                     <a
    //                       href="#!"
    //                       className="text-white font-normal hover:text-white"
    //                     >
    //                       Forgot password?
    //                     </a>
    //                   </div>

    //                   {/* Register button */}
    //                   <div className="flex items-center justify-between pb-6">
    //                     <p className="mb-0 mr-2">Don&apos;t have an account?</p>
    //                     <button
    //                       type="button"
    //                       className="inline-block rounded border-2 border-red-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-red-500 transition duration-150 ease-in-out hover:border-red-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-red-600 focus:border-red-600 focus:text-red-600 focus:outline-none focus:ring-0 active:ring-0 active:border-red-700 active:text-red-700 dark:hover-bg-neutral-100 dark:hover:bg-opacity-10 custom-btn-register"
    //                       data-te-ripple-init
    //                       data-te-ripple-color="light"
    //                     >
    //                       Register
    //                     </button>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
    //             {/* Right column container with background and description */}
    //             <div
    //               className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
    //               style={{
    //                 background:
    //                   "linear-gradient(to right, #ababab, #8d2663, #000000)",
    //               }}
    //             >
    //               <div className="px-4 py-6 text-white text-center flex flex-col items-center md:mx-6 d:p-12">
    //                 <h4 className="mb-6 text-xl font-semibold">
    //                   We are more than just ghosts
    //                 </h4>
    //                 <p className="text-sm">
    //                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //                   Deserunt soluta sequi omnis vitae repudiandae, eaque quod
    //                   incidunt temporibus minus, quae nemo quam magni laudantium
    //                   molestias, libero debitis. Suscipit, temporibus totam!
    //                 </p>
    //                 {/* <img className="w-3/4" src="../../96073ad2ba1c974329380a694d68f839.jpg" alt="" /> */}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>ç
    <div>hola</div>
  );
}

export default SignUp;
