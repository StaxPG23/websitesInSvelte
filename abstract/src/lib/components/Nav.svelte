<script>

</script>

<div class="head">
    <nav class="navbar">
        <div class="navbar-title">Abstract | Help Center</div>
        <div class="btn">
            <button class="btn-submit">Submit a request</button>
            <button class="btn-sign">Sign in</button>
        </div>
    </nav>
</div>
<div class="hero-content">
    <div>
        <h1>How can we help?</h1>
    </div>
    <div class="input-wrapper">
        <input type="text">
        <div>
           <img src="src\assets\arrow-right-svgrepo-com.svg" alt="hello" >
           
        </div>
    </div>
</div>


<style>
    .head {
        background-color: var(--black-color);
    }
    .navbar {
        display: flex;
        flex-direction: row;

        width: 80%;
        margin-inline: auto;

        /* background-color: var(--black-color); */

        justify-content: center;
        align-items: center;

        padding: 1em 0em;
       
    }

    .navbar .btn {
        margin-left: auto;

    }

    .navbar button {
        /* background-color: var(--black-color); */
        padding: 1rem 2rem;
        border-radius: 15px;
        
        font-size: 1rem;
        /* background: none; */
        box-shadow: none;
        outline: none;
        /* border: none; */
    }

    .btn-submit {
        /* background: none; */
        border-spacing: 2px;
        border-color: var(--white-color);
        background-color: var(--black-color);
        /* border: 1px solid white; */   
        /* outline: none; */
    }

    .btn-submit:active {
        border-style: outset;
    }

    .btn-sign {
        background-color: var(--btn-color);
        margin-left: 2em;
        border: none;
    }

    .navbar .navbar-title,.navbar button {
        cursor: pointer;
        color: var(--white-color);
    }

    .hero-content {
        width: 100%;
        height: 20em;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        background-color: var(--hero-color);
        
       
    }

    .hero-content div>h1 {
        font-size: 3.5rem; 
        margin-bottom: 1.4rem;
    }

    .input-wrapper {
        display: flex;
        flex-direction: row;
        position: relative;

        width: 35em;
        height: 3em;
        
        aspect-ratio: 1;
    }

    .input-wrapper div {
        position: absolute;
        right: 2px;
        bottom: 0em;
    }

    .input-wrapper input {
        width: 100%;
        font-size: 1.5rem;
        padding:1em;

        border: none;

        border-radius: 10px;

    }

    .input-wrapper div>img {
        width: 2em;
        height: 2em;



    }
</style>

