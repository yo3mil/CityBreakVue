<template>
    <section class="info">
        <div class="info__text">
            <p>
                This app compares the current temperature in 34 European capital cities with the temperature around you. Let’s hope it will help you to pick the perfect warmth for your city break. 
                <br>Made with Vue.js for educational purposes only. 
            </p>
        </div>
        <div class="info__credits">
            <h3>Made by:</h3>
            <a href="http://www.emilwojcik.com">www.EmilWojcik.com</a>
            <h3>API:</h3>
            <a href="http://www.openweathermap.org">www.openweathermap.org</a>
            <h3>GIT:</h3>
            <a href="https://github.com/yo3mil/CityBreakVue.git">SRC Code</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .info {
        justify-content: center;
        &__text {
            margin-bottom: 3rem;
            margin-top: 4rem;
            max-width: 400px;
            flex: 0 0 30%;
        }

        &__credits {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            margin-bottom: 4rem;
            & a {
                text-decoration: none;
                letter-spacing: 1px;
                color: #dadada;
                font-size: 1.8rem;
            }
        }
    }

</style>