<script></script>
<div class="container">
    <!-- <h1>Hello</h1> -->
    <div class="content">
        <div>
            <p>Branches</p>
            <p>Abstract lets you manage, version, and document your designs in one place.</p>
            <div>Learn more -></div>
        </div>
        <div>
            <p>Manage your account</p>
            <p>Configure your account settings, such as your email, profile details, and password.</p>
            <div>Learn more -></div>
        </div>
        <div>
            <p>Manage organizations, teams, and projects</p>
            <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
            <div>Learn more -></div>
        </div>
        <div>
            <p>Manage billing</p>
            <p>Change subscriptions and payment details.</p>
            <div>Learn more -></div>
        </div>
        <div>
            <p>Authenticate to Abstract</p>
            <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
            <div>Learn more -></div>
        </div>
        <div>
            <p>Abstract support</p>
            <p>Get in touch with a human.</p>
            <div>Learn more -></div>
        </div>
    </div>
</div>
<style>
    .container {
        height: 50em;

        display: grid;
        place-content: center;
    }

    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2em;
        width: 70%;
        margin-inline: auto;
    }

    .content div {
        min-width: 80%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .content div p:nth-child(1) {
        font-weight: bold;
        font-size: 2rem;
    }

    .content div p:nth-child(2) {
        letter-spacing: .5px;
        font-size: 1.2rem;
    }

    .content div div {
        color: var(--btn-color);
        cursor: pointer;
    }
</style>