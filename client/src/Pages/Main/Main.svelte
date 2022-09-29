<script lang="ts">
    import Icon from "svelte-icons-pack";
    import FiSearch from "svelte-icons-pack/fi/FiSearch";
    import FiMessageCircle from "svelte-icons-pack/fi/FiMessageCircle";
    import FiBell from "svelte-icons-pack/fi/FiBell";
    import FiUser from "svelte-icons-pack/fi/FiUser";
    import Art from "../../lib/Art.svelte";

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
</script>

<main class="h-screen px-12 overflow-auto">
    <header class="sticky top-0">
        <div class="logo pt-4">
            <img src="./images/logo.svg" class="scale-75" alt="">
        </div>
        <div class="mt-4 absolute right-4 flex items-center gap-12">
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
                <div class="flex items-center justify-center p-3 bg-white bg-opacity-30 rounded-full w-[45px] h-[45px] cursor-pointer active:scale-[.96]">
                    <Icon src={FiUser} size="24" color="white" />
                </div>
            </div>
        </div>
    </header>

    <div class="content mt-24">

        <div class="">
            <div class="title">
                <h2 class="text-gray-200 text-2xl">Now trending</h2>
            </div>
            <div class=" sm:block flex items-center justify-between gap-1 flex-wrap py-3">
                {#each arts as art}
                    <Art {art} />
                    {:else}
                        <p class="text-red-500 p-2">Something went wrong</p>
                        
                {/each}
            </div>
        </div>

    </div>

</main>
<style>

</style>