<script>
import JumbotroSection from "./../components/section/JumbotronSection.vue";
import SiteMain from "./../components/SiteMain.vue";
export default {
    name: "ContactsView",
    components: {
        JumbotroSection,
        SiteMain,
    },
};

</script>

<template>
    <JumbotroSection></JumbotroSection>
    <SiteMain>
        <form class="mb-5 py-3">
            <div class="mb-5">
                <label for="name" class="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="Type your full name here" />
            </div>

            <div class="mb-5">
                <label for="email" class="form-label">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Type your email here" />
            </div>

            <div class="mb-5">
                <div for="message" class="form-label">Message:</div>
                <textarea class="form-control rounded" name="message" id="message" rows="8"></textarea>
            </div>

            <button type="submit" class="btn btn-primary text-white me-2">Send</button>
            <button type="reset" class="btn btn-warning text-white">Reset</button>
        </form>
    </SiteMain>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>
