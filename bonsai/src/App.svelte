<script>
  import Navbar from "./lib/Navbar.svelte";
  import Pricing from "./lib/Pricing.svelte";
  let active = false;
  let accordion = false;

  function accordionShow() {
    active = !active;
  }


</script>

<main class="bg-slate-100 h-dvh">
  <div>
      <Navbar/>
      <Pricing/>
  </div>

  <div class="flex flex-col justify-center items-center w-3/4 mx-auto gap-8 mt-36">
      <div>
        <h1 class="text-4xl font-semibold text-back-green">Frequently Asked Questions</h1>    
      </div>
      <div class="shadow-md p-8">
        <button class="w-full text-start text-2xl font-bold flex" on:click={accordionShow}>How Does the free trial work? 
                <span class="ml-auto text-base w-8 h-8 contain">
                  <img src="src/assets/right-arrow.svg" alt="arrow">
                </span>
        </button>
        <p class="max-h-0 overflow-hidden transition-all delay-300" class:active={active}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae sequi accusantium omnis libero beatae ducimus quos est officiis sit.</p>
      </div>
      <div class="test-radio  w-full flex gap-12 flex-col shadow-md p-8">
        <div>
          <input type="radio" name="faq" id="q2" bind:group={accordion} value=3>
          <label class="text-2xl font-bold" for="q2">Can I change Plans anytime?</label>
          <div class="max-h-0 overflow-hidden transition-all duration-300" class:activeTwo={ Number(accordion) === 3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, corrupti!</div>
        </div>
        <div class="cursor-pointer">
          <input type="radio" name="faq" id="q3" bind:group={accordion} value=1>
          <label class="text-2xl font-bold" for="q3">How do I pause my Bonsai subscription?</label>
          <div class="max-h-0 overflow-hidden transition-all duration-300" class:activeTwo={ Number(accordion) === 1}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, corrupti!</div>
        </div>
        <div class="cursor-pointer">
          <input type="radio" name="faq" id="q4" bind:group={accordion} value=2>
          <label class="text-2xl font-bold" for="q4">What is your refund policy?</label>
          <div class="max-h-0 overflow-hidden transition-all duration-300" class:activeTwo={ Number(accordion) === 2 }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, soluta!</div>
        </div>
      </div>
  </div>
  <div class="bg-black w-full min-h-12 text-white grid place-content-center py-12 gap-8">
    <div class="text-center">
      <h1 class="text-4xl"> Bonsai &copy;-2024</h1>
    </div>
    <div class="flex flex-row text-2xl gap-8 justify-center [&_div]:cursor-pointer">
      <div>Home</div>
      <div>Projects</div>
      <div>Contact</div>
    </div>
  </div>
</main>

<style>
  .active {
    transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);;
    max-height:5em;
  }

  .activeTwo {
    transition: max-height .3s ease-in-out;
    max-height: 5rem;
  }

  input[type="radio"] {
    display: none;
  }

</style>
