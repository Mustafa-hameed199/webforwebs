<template>
    <header class="header">
        <div class="container">
            <div class="header__box">
                <div class="logo">
                    <a href="#" @click.prevent>
                        <img src="../assets/images/logo.png" alt="Main Logo" />
                    </a>
                </div>
                <nav class="nav">
                    <div
                        v-show="mobileWidth"
                        class="nav__icon"
                        @click="navIcon"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <!------------------------------------------------------- Main Links ------------------>
                    <ul class="nav__ul">
                        <li
                            v-for="(mLink, index) in mainLinks"
                            :key="index"
                            :data-name="mLink"
                            @click="
                                navIcon();
                                linksBgMove(mLink);
                            "
                        >
                            <router-link
                                :to="index == 0 ? '/' : mLink"
                                :exact="index == 0"
                            >
                                {{ mLink }}
                            </router-link>
                        </li>
                        <li @mouseenter="menuBtnOn" @mouseleave="menuBtnOff">
                            <a href="#" class="menu-btn" @click.prevent
                                >more <i class="fas fa-angle-down"></i
                            ></a>
                            <!------------------------------------------------------- Menu Links ------------------>
                            <ul class="nav__menu">
                                <li
                                    v-for="(link, index) in menuLinks"
                                    :key="index"
                                    :data-name="link"
                                    @click="
                                        menuBtnOff();
                                        navIcon();
                                        linksBgMove(link);
                                    "
                                >
                                    <router-link :to="link" v-fixName>
                                        {{ link }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <!------------------------------------------------------- Change Mode ------------------>
                        <div class="links__bg"></div>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="mode">
            <div class="mode__btn" @click="changeMode"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: "header",
    data() {
        return {
            mobileWidth: null,
            windowWidth: null,
            mainLinks: ["home", "picture", "icon", "font", "color"],
            menuLinks: [
                "layout",
                "template",
                "practice",
                "problem_solving",
                "animation",
                "reference",
                "useful_web",
                "web_inspire",
                "hosting",
                "remote_job",
            ],
        };
    },
    created() {
        window.addEventListener("resize", () => {
            this.checkScreen();
            this.fixBgLinks();
        });
        this.checkScreen();
        this.fixBgLinks();
    },
    methods: {
        menuBtnOn() {
            document.querySelector(".menu-btn").classList.add("show");
        },
        menuBtnOff() {
            document.querySelector(".menu-btn").classList.remove("show");
        },
        // -------------------------------- Move bg links on click  ------------------
        linksBgMove(link) {
            let mover = document.querySelector(".links__bg");
            let element = document.querySelector(`[data-name=${link}]`);
            let allLinks = document.querySelectorAll(".nav li, .nav a");
            allLinks.forEach((li) => li.classList.remove("bg-active"));
            if (element.parentElement.classList.contains("nav__menu"))
                element = document.querySelector(".menu-btn");
            element.classList.add("bg-active");

            let h = element.getBoundingClientRect().height;
            let w = element.getBoundingClientRect().width;
            let l = element.offsetLeft;

            mover.style.height = h + "px";
            mover.style.width = w + "px";
            mover.style.left = l + "px";
        },
        // -------------------------------- Fix Bg Links on resize or reload ------------------
        fixBgLinks() {
            if (!document.querySelector(".bg-active")) return;
            let mover = document.querySelector(".links__bg");
            let element = document.querySelector(".bg-active");

            let h = element.getBoundingClientRect().height;
            let w = element.getBoundingClientRect().width;
            let l = element.offsetLeft;

            mover.style.height = h + "px";
            mover.style.width = w + "px";
            mover.style.left = l + "px";
        },
        // -------------------------------- Check for mobile screen ------------------
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 768) {
                this.mobileWidth = true;
                let icon = document.querySelector(".nav__icon");
                if (icon.classList.contains("show"))
                    icon.classList.remove("show");
                return;
            }
            this.mobileWidth = false;
        },
        navIcon() {
            const links = document.querySelectorAll(".nav__ul > * > a");
            if (window.innerWidth <= 767) {
                document.querySelector(".nav__icon").classList.toggle("show");
            } else {
                links.forEach((el) => el.classList.remove("active"));
                links[links.length - 1].classList.add("active");
            }
        },
        // -------------------------------- change theme ---------------
        changeMode(e) {
            let root = document.querySelector("html");
            if (!e.target.classList.contains("dark")) {
                e.target.classList.add("dark");
                root.style.cssText = `
                --white_clr: black;
                --black_clr: var(--text_clr);
                --section_bg_clr: #252526;
                --text_clr: rgba(255 255 255 / .65);
                --home_img_shadow: 8px 8px 8px rgba(0 0 0 /.4); 

                --items_shadow:  .25rem .25rem .5rem rgba(0 0 0 / 0.3), 
                                    -.25rem -.25rem .5rem rgba(255 255 255 / 0.035);

                --items_shadow_hover: inset .25rem .25rem .5rem rgba(0 0 0 / 0.3), 
                                        inset -.25rem -.25rem .5rem rgba(255 255 255 / 0.035);`;
                return;
            }
            e.target.classList.remove("dark");
            root.style.cssText = `
                --white_clr: white;
                --black_clr: black;
                --section_bg_clr: #ccc;
                --text_clr: var(--black_clr);
                --home_img_shadow: 8px 8px 8px rgba(0 0 0 /0.4);
            
                --items_shadow: 0.25rem 0.25rem 0.5rem #aaa, -0.25rem -0.25rem 0.5rem #eee;
            
                --items_shadow_hover: inset 0.25rem 0.25rem 0.5rem #aaa, inset -0.25rem -0.25rem 0.5rem #eee;`;
        },
    },
    directives: {
        fixName: {
            bind: function (el) {
                return (el.innerHTML = el.innerHTML.split("_").join(" "));
            },
        },
    },
};
</script>
