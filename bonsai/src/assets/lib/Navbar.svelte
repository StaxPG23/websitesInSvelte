<script>
    let show = false;
    
    function showMenu() {
        show = true;
    }

    function hideMenu() {
        show = false;
    }
    

</script>

<div>
    <nav class="flex w-5/6 max-w-7xl m-auto navbar py-2 px-8  gap-4 justify-center items-center">
        <div class="text-3xl text-back-green text-2xl">BonSai</div>
        <div class="text-font-black flex gap-2 dropdown cursor-pointer relative text-lg" on:mouseover={showMenu} on:mouseleave={hideMenu} role="menu">
            Product <div class="dropdown-child">
                    H
                    </div>
            <div class="dropdown-menu opacity-0 absolute w-80 h-24 shadow-2xl px-4 py-4 overflow-hidden text-base" class:show = {show}>
                <div class="">
                    <h1 class="font-bold">BonSai WorkFlow</h1>
                    <p>Look professional, win more clients and manage your business from one place</p>
                </div>
            </div>        
        </div>
        <div class="text-font-black text-lg">Templates</div>
        <div class="text-font-black text-lg">Pricing</div>
        <div class="text-font-black text-lg">Reviews</div>
        <div class="flex gap-4">
            <button class="border-back-green border-2 border-solid py-1 text-back-green btn">Log In</button>
            <button class="py-1 bg-back-green text-white btn">Start Free</button>
        </div>
    </nav>



</div>

<style>

.navbar div:nth-child(2) {
    margin-left: auto;
}
.navbar div:nth-child(6) {
    /* margin-right: 1rem; */
    margin-left: 2rem;
}

.dropdown-menu {
    left: -7rem;
    top: 3em;
    transform: translateY(-20px);
    transition: all .3s ease-in-out;
}

.show {
    transform: translateY(0);
    opacity: 1;
}

.btn {
    text-transform: uppercase;
    padding-inline: 1.5rem;
}



</style>
