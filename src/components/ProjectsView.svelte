<script lang="ts">
  import { fly } from "svelte/transition";
  import SectionDropdown, { type View } from "./SectionDropdown.svelte";

  let selectedView: View = "projects";
</script>

<SectionDropdown
  selected={selectedView}
  on:select={({ detail }) => {
    selectedView = detail.value;
    console.log("ran");
  }}
/>

{#if selectedView === "projects"}
  <div class="pt-26px" in:fly={{ y: -50 }}>
    <div class="flex flex-col gap-16px">
      <a href="/projects/my-website" class="flex flex-col gap-12px">
        <div class="">
          <img src="/Images/shatermt.jpg" alt="" />
        </div>
        <div class="flex justify-between items-end">
          <div class="flex flex-col">
            <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
              Shatermt.com
            </h1>
            <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
              Personal Website Project
            </h2>
          </div>

          <div class="flex flex-col text-right">
            <p class="font-mena-grotesk text-#626262 text-12px fw-300">2024</p>
            <div class="flex gap-10px items-center content-center">
              <p class="font-mena-grotesk text-#515151 text-14px fw-600">
                View Project
              </p>
            </div>
          </div>
        </div>
      </a>

      <div class="bg-#ddd">
        <hr />
      </div>

      <a href="https://www.behance.net/gallery/185834829/Sonic">
        <div class="flex flex-col gap-12px">
          <div class="">
            <img src="/Images/Sonic.png" alt="" />
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
                Sonic Music App
              </h1>
              <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
                Product Design Project
              </h2>
            </div>

            <div class="flex flex-col text-right">
              <p class="font-mena-grotesk text-#626262 text-12px fw-300">
                2023
              </p>
              <div class="flex gap-10px items-center content-center">
                <div
                  class="fill-#1E1A19 i-fa6-brands-behance relative bottom-2px h-18px w-18px"
                ></div>
                <a href="https://www.behance.net/gallery/185834829/Sonic">
                  <p class="font-mena-grotesk text-#515151 text-14px fw-400">
                    View Project
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div class="bg-#ddd">
        <hr />
      </div>

      <a href="https://www.behance.net/gallery/168381553/ZERO-Gaming-App">
        <div class="flex flex-col gap-12px">
          <div class="">
            <img src="/Images/Zero.png" alt="" />
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
                Zero. Gaming App
              </h1>
              <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
                Product Design Project
              </h2>
            </div>

            <div class="flex flex-col text-right">
              <p class="font-mena-grotesk text-#626262 text-12px fw-300">
                2023
              </p>
              <div class="flex gap-10px items-center content-center">
                <div
                  class="fill-#1E1A19 i-fa6-brands-behance relative bottom-2px h-18px w-18px"
                ></div>
                <a
                  href="https://www.behance.net/gallery/168381553/ZERO-Gaming-App"
                >
                  <p class="font-mena-grotesk text-#515151 text-14px fw-400">
                    View Project
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div class="bg-#ddd">
        <hr />
      </div>

      <a
        href="https://www.behance.net/gallery/170538241/Brew-Time-Coffee-Shop-Case-study"
      >
        <div class="flex flex-col gap-12px">
          <div class="">
            <img src="/Images/BrewTime.png" alt="" />
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
                Brew Time Website
              </h1>
              <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
                Product Design Project
              </h2>
            </div>

            <div class="flex flex-col text-right">
              <p class="font-mena-grotesk text-#626262 text-12px fw-300">
                2023
              </p>
              <div class="flex gap-10px items-center content-center">
                <div
                  class="fill-#1E1A19 i-fa6-brands-behance relative bottom-2px h-18px w-18px"
                ></div>
                <a
                  href="https://www.behance.net/gallery/170538241/Brew-Time-Coffee-Shop-Case-study"
                >
                  <p class="font-mena-grotesk text-#515151 text-14px fw-400">
                    View Project
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div class="bg-#ddd">
        <hr />
      </div>

      <a
        href="https://www.behance.net/gallery/181206771/Airline-Booking-System-Dashboard"
      >
        <div class="flex flex-col gap-12px">
          <div class="">
            <img src="/Images/Nimbus.png" alt="" />
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
                Nimbus Air Dashboard
              </h1>
              <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
                Product Design Project
              </h2>
            </div>

            <div class="flex flex-col text-right">
              <p class="font-mena-grotesk text-#626262 text-12px fw-300">
                2023
              </p>
              <div class="flex gap-10px items-center content-center">
                <div
                  class="fill-#1E1A19 i-fa6-brands-behance relative bottom-2px h-18px w-18px"
                ></div>
                <a
                  href="https://www.behance.net/gallery/181206771/Airline-Booking-System-Dashboard"
                >
                  <p class="font-mena-grotesk text-#515151 text-14px fw-400">
                    View Project
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
{:else if selectedView === "experience"}
  <div class="pt-26px" in:fly={{ y: -50 }}>
    <div class="flex flex-col gap-16px">
      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            Product Designer
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Bave Design Agency
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Full-Time
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Nigeria</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Jul 2023-Nov 2023
          </p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            UI/UX Designer
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            PDF Lawyer
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Contract
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            United Kingdom
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Sept 2023-Oct 2023
          </p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            UI/UX Designer
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            The Udemba Group
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Contract
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            United States
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Oct 2023-Nov 2023
          </p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            UI/UX Designer
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            NewbreedCC
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Contract
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Nigeria</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Sept 2023-Oct 2023
          </p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            UI/UX Designer
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Volla Pay
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Part-Time
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Nigeria</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            May 2023-Jun 2023
          </p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            UI/UX Designer
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            MaxWryte
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Contract
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Canada</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Jan 2023-May 2023
          </p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            UI/UX Designer
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Yoris Global
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Internship
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Nigeria</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Nov 2022-Feb 2023
          </p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            Web Developer
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Suburban Fibre Co
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Internship
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Nigeria</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Sep 2021-Jan 2022
          </p>
        </div>
      </div>
    </div>
  </div>
{:else if selectedView === "education"}
  <div class="pt-26px" in:fly={{ y: -50 }}>
    <div class="flex flex-col gap-16px">
      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            Bsc. Compter Science
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Baze University
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Nigeria</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Sep 2019 - Nov 2022
          </p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            Complete UI/UX Design Course
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Davio White
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300"></p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Apr 2023 - Jul 2023
          </p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            Google UX Design
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Coursera
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300"></p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Jan 2023 - Mar 2023
          </p>
        </div>
      </div>
    </div>
  </div>
{:else if selectedView === "speaking-and-writing"}
  <div class="pt-26px" in:fly={{ y: -50 }}>
    <div class="flex flex-col gap-16px">
      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            Networking And The Power Of Connections
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Abuja Founders & Techies Hangout
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Speaking
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Nigeria</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">2023</p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            Getting Started In Product Design
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Twitter Space with Dennis Obara
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Speaking
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Twitter</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">2023</p>
        </div>
      </div>

      <div class="bg-#ddd">
        <hr />
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            My Journey through the First Year of Product Design
          </h1>
          <a
            href="https://medium.com/design-bootcamp/my-journey-through-the-first-year-of-product-design-ba55e54c78c3"
          >
            <div class="flex items-center gap-10px">
              <div class="fill-#0E0E0E h-18px w-18px i-bi-medium"></div>
              <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
                Read
              </h2>
            </div>
          </a>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Writing</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Medium</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">2023</p>
        </div>
      </div>
    </div>
  </div>
{:else if selectedView === "recomendation"}
  <div class="pt-26px" in:fly={{ y: -50 }}>
    <div class="flex flex-col gap-16px">
      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <h1 class="font-mena-grotesk text-#0A231D text-16px fw-600">
            Mbenefo Godwin Obiora
          </h1>
          <h2 class="font-mena-grotesk text-#0e0e0e text-14px fw-300">
            Yoris Africa Limited
          </h2>
        </div>
        <div class="flex flex-col text-right">
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Internship
          </p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">Nigeria</p>
          <p class="font-mena-grotesk text-#626262 text-12px fw-300">
            Nov 2022-Feb 2023
          </p>
        </div>
      </div>
    </div>
  </div>
{/if}
