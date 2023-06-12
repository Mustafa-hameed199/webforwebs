<template>
    <main class="home">
        <div class="container">
            <div class="home__box">
                <div class="home__text">
                    <div class="text-content">
                        <h1 class="title">web<span>4</span><br />webs</h1>
                        <p class="desc">
                            Go to websites you are using in your projects faster
                            with just one click and easy to find
                        </p>
                        <router-link to="/picture" class="btn"
                            >start</router-link
                        >
                    </div>
                </div>
                <div class="home__img">
                    <img
                        src="../assets/images/home hand.png"
                        alt="Home Hand Image"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "home",
};
</script>
