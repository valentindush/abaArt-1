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
  import AddArt from "./AddArt.svelte";

    let arts:{id:string,title:string,owner:string,image:string}[]=[
        {
            id: "1",
            title: "Lion king",
            owner: "King Arthur",
            image: "images/art.png",
        },
        {
            id: "2",
            title: "Lion king",
            owner: "King Arthur",
            image: "images/art.png",
        },
        {
            id: "3",
            title: "Lion king",
            owner: "King Arthur",
            image: "images/art.png",
        },
        {
            id: "4",
            title: "Lion king",
            owner: "King Arthur",
            image: "images/art.png",
        },
        {
            id: "5",
            title: "Lion king",
            owner: "King Arthur",
            image: "images/art.png",
        },


    ]
    const categories:string[] = [
        "Painting",
        "3D arts",
        "Music",
        "Photography",
        "sculpture",
        "Drawing",
    ]
    let activeCat:string = categories[0]
    const chooseCategory = (value:string)=>{
        activeCat = value;
    }

    let showProfile = false
    let showAddArt = false
    let showNotifications = false
    let showChat = false

    const closeProfile = ()=>showProfile = !showProfile;
    const closeAddArt = ()=> showAddArt = !showAddArt
    const closeNotification = ()=> showNotifications = !showNotifications
    const closeChat = ()=> showChat = !showChat



</script>

<main class="h-screen px-12 overflow-auto relative">
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

    <div class="content mt-24">

        {#if arts.length !== 0}
            <div class="">
                <div class="title">
                    <h2 class="text-gray-200 text-2xl">Now trending</h2>
                </div>
                <div class=" sm:block flex items-center justify-start gap-1 flex-wrap py-3">
                    {#each arts as art}
                        <Art {art} />
                        {:else}
                            <p class="text-red-500 p-2 font-bold text-2xl">Something went wrong</p>
                            
                    {/each}
                </div>
                
            </div>
            <div class="mt-4">
                <div class="title">
                    <h2 class="text-gray-200 text-2xl">Most popular</h2>
                </div>
                <div class=" sm:block flex items-center justify-start gap-1 flex-wrap py-3">
                    {#each arts as art}
                        <Art {art} />
                        {:else}
                            <p class="text-red-500 p-2 font-bold text-2xl">Something went wrong</p>
                            
                    {/each}
                </div>
                
            </div>
            <div class="mt-4">
                <div class="title">
                    <h2 class="text-gray-200 text-2xl">Choose by categories</h2>
                    <div class="catgrs py-4">
                        {#each categories as category}
                            <button on:click={()=>chooseCategory(category)} class={`py-2 px-5 rounded-full ${activeCat === category?"bg-pink-500 bg-opacity-60":"bg-white bg-opacity-20"} inline-block mr-2 cursor-pointer active:scale-[.97] border border-pink-500 border-opacity-50 mt-3`}>
                                <p class="text-gray-200 text-center">{category}</p>
                            </button>
                        {/each}
                    </div>
                </div>
                <div class=" sm:block flex items-center justify-start gap-1 flex-wrap py-3">
                    {#each arts as art}
                        <Art {art} />
                        {:else}
                            <p class="text-red-400 p-2 font-bold text-2xl">Something went wrong</p>
                            
                    {/each}
                </div>
                
            </div>
            {:else}
            <p class="text-red-500 p-2 font-semibold text-2xl">Ooops. Something went wrong while loading the arts</p>

        {/if}

    </div>

    <button on:click={closeAddArt} title="Add a new art" class=" fixed top-1/2 right-12 z-10 w-[50px] h-[50px] rounded-full bg-pink-700 flex items-center justify-center shadow-xl active:scale-[.97]">
        <Icon src={AiOutlinePlus} color="white" size="30" />
    </button>
    {#if showProfile}
        <Profile close={closeProfile} />
    {/if}
    {#if showAddArt}
        <AddArt close={closeAddArt} />
    {/if}
</main>

<style>
.themed {
    --border: 3px solid pink;
    --borderRadius: 10px;
    --placeholderColor: pink;
  }
</style>
