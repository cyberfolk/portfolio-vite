<script>
import CyberButton from "./../components/item/CyberButton.vue";
import axios from 'axios';
import { state } from '../state';
import JumbotroSection from "./../components/section/JumbotronSection.vue";
import SiteMain from "./../components/SiteMain.vue";
export default {
    name: "ContactsView",
    components: {
        JumbotroSection,
        SiteMain,
        CyberButton
    },
    data() {
        return {
            state,
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            console.log(data);
            console.log(`${this.state.API_URL_BASE}api/contacts`);

            // pulisco l'array con i messaggi
            this.errors = {};

            // Importante - Stiamo comunicando con Laravel, quindi non è più obbligatorio inserire gli headers con il Content-Type
            // come abbiamo fatto invece quando comunicavamo direttamente con gli script PHP
            axios.post(`${this.state.API_URL_BASE}api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if (!this.success) {
                    this.errors = response.data.errors;
                } else {
                    // ripulisco i campi di input
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }
                this.loading = false;
            });
        },
    }

};

</script>

<template>
    <JumbotroSection></JumbotroSection>
    <SiteMain>
        <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo!
        </div>
        <form @submit.prevent="sendForm()" class="mb-5 py-3">
            <div class="mb-5">
                <label for="name" class="form-label">Name</label>
                <input type="text"
                    name="name" id="name" v-model="name"
                    class="form-control" :class="{ 'is-invalid': errors.name }"
                    placeholder="Type your full name here" />
                <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
            </div>

            <div class="mb-5">
                <label for="email" class="form-label">Email</label>
                <input type="text"
                    name="email" id="email" v-model="email"
                    class="form-control" :class="{ 'is-invalid': errors.email }"
                    placeholder="Type your email here" />
                <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
            </div>

            <div class="mb-5">
                <div for="message" class="form-label">Message:</div>
                <textarea rows="8"
                    name="message" id="message" v-model="message"
                    class="form-control rounded" :class="{ 'is-invalid': errors.message }"></textarea>
                <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
            </div>

            <CyberButton class="py-2 px-5 me-4 fs-4" type="submit" :disabled="loading">{{ loading ? 'Sending...' : 'Send' }} </CyberButton>
            <CyberButton class="py-2 px-5 fs-4" type="reset" :disabled="loading">{{ loading ? 'Sending...' : 'Reset' }} </CyberButton>

        </form>
    </SiteMain>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>
