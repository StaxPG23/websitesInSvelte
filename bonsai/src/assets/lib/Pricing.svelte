<script>
    // let month = 10;
    let yearly = false; 
</script>

<div class="mt-48">
    <div class="flex flex-row w-3/4 max-w-4xl mx-auto items-center">
        <div>
            <h1 class="text-5xl text-font-black">Plans & Pricing</h1>
        </div>
        <div class="flex text-2xl gap-8 ml-auto">
            <div>
                MONTHLY
            </div>
            <div>
                <input type="checkbox" bind:checked={yearly} id="checked" class="hidden"/>
                <label for="checked" class="cursor-pointer btn-toggle w-16 h-8 px-10 py-1"></label>
            </div>
            <div>
                YEARLY
            </div>
        </div>
    </div>
    <div class="flex flex-row w-3/4 max-w-4xl mx-auto">   
        
        <div class="w-96 h-80 shadow-md mt-20 transition-all cursor-pointer duration-300 hover:shadow-2xl">
            <div class="flex flex-col w-3/4 m-auto pb-2 border-b-back-green border-b-2 mt-4 gap-2">
                <h1 class="font-bold text-xl">Starter</h1>
                <p>Ideal for freelancers and contractors just starting out.</p>
                <div>
                    <span>$</span>
                        {#if yearly === true}
                            {17}
                        {:else}
                            {24}
                        {/if}
                    <span class="uppercase">/Month</span>
                </div>
            </div>    
        </div>

        <div class="w-96 h-80 shadow-md mt-20 ml-auto transition-all cursor-pointer duration-300 hover:shadow-2xl" >
            <div class="flex flex-col w-3/4 m-auto pb-2 border-b-back-green border-b-2 mt-4 gap-2">
                <h1 class="font-bold text-xl">Starter Plus</h1>
                <p>Everything a growing independent business needs to thrive.</p>
                <div>
                    <span>$</span>
                        {#if yearly === true}
                            {20}
                        {:else}
                            {30}
                        {/if}
                    <span class="uppercase">/Month</span>
                </div>
            </div>       
        </div>

    </div>
</div>

<style>
    .btn-toggle {
        background-color: #00b289;
        border-radius: 300px;
        /* border: #0e0c0c 1px solid; */
        position: relative;
        transition: .2s ease-in;
    }

    .btn-toggle::before {
        content: '';
        position: absolute;
        background-color: #fff;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin: 3px;
        left: 0;
        top: 1px;
        transition: .2s ease-in;
    }
    input:checked + .btn-toggle{
        background-color: #00b289;
    }
    input:checked + .btn-toggle::before{
        transform: translateX(42px);
    }


</style>
