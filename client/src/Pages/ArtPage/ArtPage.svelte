<script lang="ts">
    import Icon from "svelte-icons-pack";
    import FiSearch from "svelte-icons-pack/fi/FiSearch";
    import FiMessageCircle from "svelte-icons-pack/fi/FiMessageCircle";
    import FiBell from "svelte-icons-pack/fi/FiBell";
    import FiUser from "svelte-icons-pack/fi/FiUser";
    import AiOutlinePlus from "svelte-icons-pack/ai/AiOutlinePlus";
    import Art from "../../lib/Art.svelte";
    import Profile from "../Profile/Profile.svelte";
    import Login from "../Login/Login.svelte";
    import AddArt from "../Main/AddArt.svelte";;
    import { arts } from "../../assets/Arts";

    let showProfile = false
    let showAddArt = false
    let showNotifications = false
    let showChat = false

    const closeProfile = ()=>showProfile = !showProfile;
    const closeAddArt = ()=> showAddArt = !showAddArt
    const closeNotification = ()=> showNotifications = !showNotifications
    const closeChat = ()=> showChat = !showChat


</script>

<main class="w-screen h-screen overflow-auto">

    <header class="sticky top-0 backdrop-blur-sm">
        <div class="logo pt-4">
            <img src="./images/logo.svg" class="scale-75" alt="">
        </div>
        <div class="mt-4 absolute sm:static right-4 flex items-center gap-12 z-10">
            <div class="search w-[35rem] relative">
                <input type="text" placeholder="Search arts" class="w-full bg-white rounded-full py-2 px-3 pl-14 backdrop-blur-md bg-opacity-20 text-white placeholder:text-white mt-2 outline-none " />
                <Icon src={FiSearch} size="24" color="white" className="absolute left-5 top-4" />
            </div>
            <div class="icons flex gap-1">
                <div class="flex items-center justify-center p-3 bg-white bg-opacity-30 rounded-full w-[45px] h-[45px] cursor-pointer active:scale-[.96]">
                    <Icon src={FiMessageCircle} size="24" color="white" />
                </div>
                <div class="flex items-center justify-center p-3 bg-white bg-opacity-30 rounded-full w-[45px] h-[45px] cursor-pointer active:scale-[.96]">
                    <Icon src={FiBell} size="24" color="white" />
                </div>
                <div on:click={closeProfile} class="flex items-center justify-center p-3 bg-white bg-opacity-30 rounded-full w-[45px] h-[45px] cursor-pointer active:scale-[.96]">
                    <Icon src={FiUser} size="24" color="white" />
                </div>
            </div>
        </div>
    </header>
    <div class="px-8 mt-24">
        <div class="flex gap-2">
            <div class="media">
                <img class="w-full h-full object-cover rounded-xl" src="../images/art.png" alt="">
            </div>
            <div class="info max-w-[400px] w-[300px]">
                <h2 class="text-xl font-medium text-gray-300 ">Art details</h2>
            </div>
        </div>
    </div>
    {#if showProfile}
        <Profile close={closeProfile} />
    {/if}
    {#if showAddArt}
        <AddArt close={closeAddArt} />
    {/if}
</main>