<template>
  <form
    action="https://formsubmit.co/isaacreisn@gmail.com"
    method="POST"
    class="space-y-6"
  >
    <input type="hidden" name="_subject" value="Novo Contato do Portfólio!" />
    <input type="text" name="_honey" style="display: none" />
    <input type="hidden" name="_captcha" value="false" />
    <div>
      <label for="name" class="block text-sm font-medium text-slate-300 mb-2"
        >Seu nome</label
      >
      <input
        type="text"
        name="name"
        id="name"
        required
        class="block w-full bg-slate-700 border-slate-600 rounded-md p-3 text-white focus:ring-sky-400 focus:border-sky-400 transition"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-slate-300 mb-2"
        >Seu e-mail</label
      >
      <input
        type="email"
        name="email"
        id="email"
        required
        class="block w-full bg-slate-700 border-slate-600 rounded-md p-3 text-white focus:ring-sky-400 focus:border-sky-400 transition"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-slate-300 mb-2"
        >Sua mensagem</label
      >
      <textarea
        name="message"
        id="message"
        rows="5"
        required
        class="block w-full bg-slate-700 border-slate-600 rounded-md p-3 text-white focus:ring-sky-400 focus:border-sky-400 transition"
      ></textarea>
    </div>

    <div>
      <button
        type="submit"
        class="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
      >
        Enviar Mensagem
      </button>
    </div>
  </form>
</template>
