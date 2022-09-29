<script lang="ts">
export let art : {
    id: string,
    title: string,
    owner: string,
    image: string,
    };
</script>
<div class="max-h-[250px] h-[250px] w-[280px] sm:w-full">
    <a href={`#/art/${art.id}`} class="">
        <div class="h-[83%]">
            <img src={art.image} class="w-full h-full object-cover rounded-lg" alt="">
        </div>
        <div class="h-[15%] mt-2 bg-black bg-opacity-30 rounded-full">
            <div class="flex justify-around items-center h-full text-gray-300">
                <p>{art.title}</p>
                <p>{art.owner}</p>
            </div>
        </div>
    </a>
</div>
