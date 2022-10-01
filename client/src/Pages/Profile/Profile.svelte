<script lang="ts">
    import Icon from "svelte-icons-pack";
    import RiSystemCloseCircleLine from "svelte-icons-pack/ri/RiSystemCloseCircleLine";
    import FiEdit2 from "svelte-icons-pack/fi/FiEdit2";
    export let close : ()=> void;
</script>
<main class="bg-black w-screen h-screen z-40 fixed top-0 left-0 bg-opacity-70">
    <div class="bg-white bg-opacity-70 m-auto w-[35rem] rounded-lg p-4 font-bold text-center relative mt-24">
        <button on:click={close} class="btn-close absolute opacity-80 right-2 top-1 active:scale-[.97]" title="close" >
            <Icon src={RiSystemCloseCircleLine} size='30' color='red' />
        </button>
        <h2 class="text-3xl">Your Profile</h2>
        <form action="#">
            <div class="pic h-[10rem] w-[11rem] mx-auto mt-4 relative">
                <img src="./images/art.png" class="h-full w-full rounded-full" alt="">
                <button class="btn-edit absolute top-1/2 -right-9 p-2 px-4 bg-black rounded-full bg-opacity-60">
                    <Icon src={FiEdit2} size="24" color="white" />
                </button>
            </div>
            <div class="">
                <div class="">
                    <p class="text-lg">100 arts</p>
                </div>
                <div class="">
                    <p class="text-lg">10000 Likes</p>
                </div>
            </div>
            <div class="mx-auto">
                <div class="p-2 font-[600] flex items-center gap-2">
                    <label class="inline-block w-[10rem] text-lg text-left" for="username" >Username</label>
                    <input id="username" type="text" placeholder="Username" value="Dush valentin" class=" bg-transparent border-2 outline-none p-2 px-5 botder-white rounded-xl placeholder:text-black placeholder:opacity-70 text-gray-800 block">
                </div>
                <div class="p-2 font-[600] flex items-center gap-2">
                    <label  class="inline-block w-[10rem] text-lg text-left" for="email" >Email</label>
                    <input id="email" type="email" placeholder="Username" value="Dushvalentin@gmail.com" class=" bg-transparent border-2 outline-none p-2 px-5 botder-white rounded-xl placeholder:text-black placeholder:opacity-70 text-gray-800 block">
                </div>
            </div>
            <div class="mt-8 pb-2">
                <button type="submit" class="bg-[#372439] py-2 px-12 text-white font-normal rounded-lg active:scale-95">Save Profile</button>
            </div>
        </form>
    </div>
    
</main>