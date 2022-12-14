<script lang="ts">
    import { SvelteComponent } from "svelte";
      import AiOutlineEyeInvisible from "svelte-icons-pack/ai/AiOutlineEyeInvisible";
      import AiOutlineEye from "svelte-icons-pack/ai/AiOutlineEye";
      import Icon from 'svelte-icons-pack'
  
      let showPassword:boolean = false;
      let type:string = "password";
      const handlepassword = () => {
        showPassword = !showPassword;
        if(showPassword){
            type = "text";
        }else{
            type = "password";
        }
      }
  
      let error:string = "";
  
  </script>
  
  <section class="h-screen flex items-center justify-center p-3">
      <div class="cont w-[30rem] sm:w-full">
          <div class="logo">
              <img src="./images/logo.svg" class="m-auto" alt="logo">
          </div>
          
          <div class="main-gradient border-pink-400 mt-4 rounded-lg backdrop-blur-md p-8">
              <div class="title pb-3">
                  <h2 class="text-xl text-gray-200 text-center">Log in into your account</h2>
              </div>
              <form action="#" class="relative">
                  <input type="text" placeholder="Username" class="w-full bg-white rounded-lg py-2 px-3 backdrop-blur-md bg-opacity-20 text-white placeholder:text-white mt-2 outline-none focus:border focus:border-white focus:border-opacity-10" />
                  <input type="email" placeholder="Email" class="w-full bg-white rounded-lg py-2 px-3 backdrop-blur-md bg-opacity-20 text-white placeholder:text-white mt-2 outline-none focus:border focus:border-white focus:border-opacity-10" />
                  <input type={type} placeholder="Password" class="w-full bg-white rounded-lg py-2 px-3 backdrop-blur-md bg-opacity-20 text-white placeholder:text-white mt-2 outline-none focus:border focus:border-white focus:border-opacity-10" />
                  <input type="password" placeholder="Confirm password" class="w-full bg-white rounded-lg py-2 px-3 backdrop-blur-md bg-opacity-20 text-white placeholder:text-white mt-2 outline-none focus:border focus:border-white focus:border-opacity-10" />
                  
                  {#if showPassword}
                      <div on:click={handlepassword} class="absolute right-2 top-[7rem] cursor-pointer">
                          <Icon  src={AiOutlineEye} size="24" color="pink" />
                      </div>
                   {:else}
                   <div on:click={handlepassword} class="absolute right-2 top-[7rem] cursor-pointer">
                     <Icon  src={AiOutlineEyeInvisible} size="24" color="pink" />
                   </div>
                  {/if}
  
                  {#if error != ""}
                      <div class="error bg-white rounded-lg mt-3 p-2 bg-opacity-50">
                          <p class="text-red-500 text-sm">{error}</p>
                      </div>
                  {/if}
  
                  <button type="submit" class="bg-[#372439] py-2 w-full text-white rounded-lg active:scale-95 mt-4">Create account</button>
                  <p class="text-gray-200 text-md text-center mt-3">Or <a class="text-blue-400 hover:underline" href="/#/login">login</a></p>
              </form>
          </div>
      </div>
  </section>
  <style>
    .main-gradient{
      background: linear-gradient(113.06deg, rgba(254, 96, 41,0.8) 0.63%, rgba(55, 31, 151,0.8) 100%);
    }
  </style>