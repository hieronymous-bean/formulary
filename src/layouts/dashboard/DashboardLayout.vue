<template>
<div>
  <div class="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
    <aside class="fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-white border-r lg:static dark:border-indigo-800 dark:bg-darker focus:outline-none">
      <div class="flex flex-col h-full">
        <nav aria-label="Main" class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
          <div>
            <a href="#" class="flex items-center p-2 text-primaryOne transition-colors rounded-md dark:text-light hover:bg-accentOne dark:hover:bg-indigo-600">
              <span aria-hidden="true"></span>
                <span class="ml-2 text-sm">Elements</span>
                <span class="ml-auto" aria-hidden="true">
                <svg class="w-4 h-4 transition-transform transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </a>
            <div role="menu" x-show="open" class="mt-2 space-y-2 px-7" aria-label="Dashboards">
              <a href="#" role="menuitem" class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                Element
              </a>
            </div>
          </div>
        </nav>

        <div class="relative flex items-center justify-center flex-shrink-0 px-2 py-4 space-x-4">
            <button
            @click="openSearchPanel"
            class="p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
            >
            <span class="sr-only">Open search panel</span>
            <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            </button>

            <div class="" x-data="{ open: false }">
            	<button
                class="block transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
            >
                <span class="sr-only">User menu</span>
                <img
                class="w-12 h-12 rounded-full"
                src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                alt="Ahmed Kamel"
                />
            </button>

            <!-- <div
                class="absolute max-w-xs py-1 bg-white rounded-md shadow-lg min-w-max left-5 right-5 bottom-full ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
                tabindex="-1"
                role="menu"
                aria-orientation="vertical"
                aria-label="User menu"
            >
                <a
                href="#"
                role="menuitem"
                class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                >
                Your Profile
                </a>
                <a
                href="#"
                role="menuitem"
                class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                >
                Settings
                </a>
                <a
                href="#"
                role="menuitem"
                class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                >
                Logout
                </a>
            </div> -->
            </div>

            <!-- Settings button -->
            <button
            @click="openSettingsPanel"
            class="p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
            >
            <span class="sr-only">Open settings panel</span>
            <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
            </button>
        </div>
        </div>
    </aside>
    <div class="fixed inset-0 z-10 bg-indigo-800 lg:hidden" style="opacity: 0.5"></div>
    <section
        x-show="isSecondSidebarOpen"
        x-transition:enter="transition-all transform duration-300 ease-in-out"
        x-transition:enter-start="-translate-x-full opacity-0"
        x-transition:enter-end="translate-x-0 opacity-100"
        x-transition:leave="transition-all transform duration-300 ease-in-out"
        x-transition:leave-start="translate-x-0 opacity-100"
        x-transition:leave-end="-translate-x-full opacity-0"
        x-ref="secondSidebar"
        @keydown.escape="window.innerWidth <= 1024 ? isSecondSidebarOpen = false : ''"
        tabindex="-1"
        class="fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-white border-r dark:border-indigo-800 dark:bg-darker lg:static focus:outline-none"
    >
        <div class="flex flex-col h-screen">
        <div class="flex-shrink-0">
            <div class="px-4 pt-4 border-b dark:border-indigo-800">
            <h2 class="pb-4 font-semibold">Element Configuration</h2>
            </div>
        </div>
        <div class="flex-1 pt-4 overflow-y-hidden hover:overflow-y-auto">
            <div class="space-y-4">
            <p class="px-4">Configuration Option</p>
            </div>
        </div>
        </div>
    </section>

    <div class="fixed flex items-center space-x-4 top-5 right-10 lg:hidden">
      <button class="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-dark focus:outline-none focus:ring">
        <span class="sr-only">Toggle main manu</span>
        <span aria-hidden="true">
            <svg
            x-show="!isSidebarOpen"
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
            x-show="isSidebarOpen"
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </span>
        </button>
        <button
        @click="isSecondSidebarOpen = true; $nextTick(() => { $refs.secondSidebar.focus() })"
        class="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-dark focus:outline-none focus:ring"
        >
        <span class="sr-only">Toggle panel</span>
        <span aria-hidden="true">
            <svg
            class="w-8 h-8 transition-transform transform"
            :class="{ 'rotate-180': isSecondSidebarOpen }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
        </span>
      </button>
    </div>

    <main class="flex-1">
      <div class="flex flex-col items-center justify-center flex-1 h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto">
        <div class="mb-4">
          <div class="relative flex p-1 space-x-1 bg-white shadow-md w-80 h-72 dark:bg-darker">
            <div class="w-16 h-full bg-gray-200 dark:bg-dark"></div>
            <div class="w-16 h-full bg-gray-200 dark:bg-dark"></div>
            <div class="flex-1 h-full bg-gray-100 dark:bg-dark"></div>
          </div>
        </div>
      </div>
    </main>

    <!-- <div
        x-transition:enter="transition duration-300 ease-in-out"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition duration-300 ease-in-out"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        x-show="isSettingsPanelOpen"
        @click="isSettingsPanelOpen = false"
        class="fixed inset-0 z-10 bg-indigo-800"
        style="opacity: 0.5"
        aria-hidden="true"
    ></div> -->
    <!-- Panel -->
    <!-- <section
        x-transition:enter="transition duration-300 ease-in-out transform sm:duration-500"
        x-transition:enter-start="translate-x-full"
        x-transition:enter-end="translate-x-0"
        x-transition:leave="transition duration-300 ease-in-out transform sm:duration-500"
        x-transition:leave-start="translate-x-0"
        x-transition:leave-end="translate-x-full"
        x-ref="settingsPanel"
        tabindex="-1"
        x-show="isSettingsPanelOpen"
        @keydown.escape="isSettingsPanelOpen = false"
        class="fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
        aria-labelledby="settinsPanelLabel"
    >
        <div class="absolute left-0 p-2 transform -translate-x-full">

        <button
            @click="isSettingsPanelOpen = false"
            class="p-2 text-white rounded-md focus:outline-none focus:ring"
        >
            <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </div>

        <div class="flex flex-col h-screen">
        <div
            class="flex flex-col items-center justify-center flex-shrink-0 px-4 py-8 space-y-4 border-b dark:border-indigo-700"
        >
            <span aria-hidden="true" class="text-gray-500 dark:text-indigo-600">
            <svg
                class="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
            </svg>
            </span>
            <h2 id="settinsPanelLabel" class="text-xl font-medium text-gray-500 dark:text-light">Settings</h2>
        </div>
        <div class="flex-1 overflow-hidden hover:overflow-y-auto">
            <div class="p-4 space-y-4 md:p-8">
            <h6 class="text-lg font-medium text-gray-400 dark:text-light">Mode</h6>
            <div class="flex items-center space-x-8">
                <button
                @click="setLightTheme"
                class="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-indigo-600 dark:hover:text-indigo-100 dark:hover:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 dark:focus:ring-indigo-700"
                :class="{ 'border-gray-900 text-gray-900 dark:border-indigo-500 dark:text-indigo-100': !isDark, 'text-gray-500 dark:text-indigo-500': isDark }"
                >
                <span>
                    <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                    </svg>
                </span>
                <span>Light</span>
                </button>

                <button
                @click="setDarkTheme"
                class="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-indigo-600 dark:hover:text-indigo-100 dark:hover:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 dark:focus:ring-indigo-700"
                :class="{ 'border-gray-900 text-gray-900 dark:border-indigo-500 dark:text-indigo-100': isDark, 'text-gray-500 dark:text-indigo-500': !isDark }"
                >
                <span>
                    <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                    </svg>
                </span>
                <span>Dark</span>
                </button>
            </div>
            </div>
        </div>
        </div>
    </section> -->

    <!-- Backdrop -->
    <!-- <div
        x-transition:enter="transition duration-300 ease-in-out"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition duration-300 ease-in-out"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        x-show="isSearchPanelOpen"
        @click="isSearchPanelOpen = false"
        class="fixed inset-0 z-10 bg-indigo-800"
        style="opacity: 0.5"
        aria-hidden="ture"
    ></div> -->
    <!-- Panel -->
    <!-- <section

        @keydown.escape="isSearchPanelOpen = false"
        class="fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
    >
        <div class="absolute right-0 p-2 transform translate-x-full">
   
        <button @click="isSearchPanelOpen = false" class="p-2 text-white rounded-md focus:outline-none focus:ring">
            <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </div>

        <h2 class="sr-only">Search panel</h2>
        <div class="flex flex-col h-screen">
        <div
            class="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b dark:border-indigo-800 dark:focus-within:text-light focus-within:text-gray-700"
        >
            <span class="absolute inset-y-0 inline-flex items-center px-4">
            <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            </span>
            <input
            x-ref="searchInput"
            type="text"
            class="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-dark dark:border-transparent dark:text-light focus:outline-none focus:ring"
            placeholder="Search..."
            />
        </div>
        <div class="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden h hover:overflow-y-auto">
            <h3 class="py-2 text-sm font-semibold text-gray-600 dark:text-light">History</h3>
            <p class="px=4">Search resault</p>
        </div>
        </div>
    </section> -->
    </div>
</div>

</template>

<script>
export default {
  name: 'DashboardLayout',
  data: () => ({
		
  }),
  components: {
		
  },
  methods: {
	
 
   
  },
  computed: {
    currentProject() {
      return this.$store.getters['projects/getCurrentProject'];
    },
		currentRouteName() {
			return this.$route.name;
    },
    currentUserDetails() {
			return this.$store.getters['authentication/getUser'];
		},
  },
	props: [
		
	],

}
</script>
<style>

</style>