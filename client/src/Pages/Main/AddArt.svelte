<script lang="ts">
    import Icon from "svelte-icons-pack";
    import RiSystemCloseCircleLine from "svelte-icons-pack/ri/RiSystemCloseCircleLine";
    import Select from "svelte-select"
    export let close : ()=> void;

    const items: {label: string, value:string}[] = [
        {
            label: "Painting",
            value: "painting"
        },
        {
            label: "3D",
            value: "3d"
        },
        {
            label: "Music",
            value: "music"
        },
        {
            label: "Photography",
            value: "photography"
        },
        {
            label: "Drawing",
            value: "drawing"
        },
        {
            label: "Others",
            value: "others"
        },
    ]
    let value:{label:string, value: string} = {
        label: "Painting", value: "painting"
    }

    const handleSelect = (e:any)=> {
        console.log(e.detail);
    }
</script>
<main class="bg-black w-screen h-screen z-40 fixed top-0 left-0 bg-opacity-70">
    <div class="bg-white bg-opacity-70 m-auto w-[35rem] rounded-lg p-4 font-bold text-center relative mt-12">
        <button on:click={close} class="btn-close absolute opacity-80 right-2 top-1 active:scale-[.97]" title="close" >
            <Icon src={RiSystemCloseCircleLine} size='30' color='red' />
        </button>
        <h2 class="text-3xl">Share yout art</h2>
        
        <form action="#" class="p-4">
            <div class="pic h-[15rem] border-2 border-white border-opacity-50 rounded-md backdrop-blur-sm">
                <label>
                    <p class="text-black p-2 cursor-pointer">Choose a photo or video to share</p>
                    <input type="file" hidden >
                </label>
            </div>
            <div class="bg-black mt-5 p-3 rounded-lg bg-opacity-50 pb-5">
                <div class="">
                    <p class="text-left text-gray-200 font-normal">T i t l e</p>
                    <input type="text" placeholder="Title" class="w-full text-gray-200 font-normal bg-transparent rounded-lg py-2 px-3 backdrop-blur-md bg-opacity-20  mt-2 outline-none border" />
                </div>
                <div class="mt-4">
                    <p class="text-left text-gray-200 font-normal py-2">C a t e g o r y</p>
                    <Select {items} {value} on:select={handleSelect} />
                </div>
                <div class="mt-5">
                    <button type="submit" class="bg-[#372439] py-2 w-full text-white rounded-lg active:scale-95 font-normal">Share art</button>
                </div>
            </div>
        </form>
    </div>
    
</main>