<template>
  <div class="reviews">
    <div class="title">
      <glitching-text
        value="Recenzie zákazníkov"
        :static-size="60"
        :speed-in-ms="10" />
    </div>

    <div class="reviews-list">
      <single-review
        value="Rýchle dohodnutie lekcie. rýchle odpovedanie na správy. Potrebavol som pomoc s úlohou a Maroš mi jasne vysvetlil ako na to a pomohol úlohu vyriešíť. Maximálna spokojnosť. :D"
        name="Matej B." />
      <single-review
        class="right"
        value="Ďakujem za rýchle dohodnutie lekcie. Maroš mi pomohol vypracovať nástroj na analýzu webovej stránky. Vďaka nemu s tým konečne dokážem pohnúť. 5/5 chalan!"
        name="Matej Š." />
      <single-review
        value="Mala možnosť pracovať s Marošom na mojej úlohe a musím povedať, že jeho pomoc bola neoceniteľná. Bol ochotný a trpezlivý, vysvetlil mi všetko rýchlo a snažil sa, aby som všetko pochopila. Odporúčam"
        name="Julia J." />
      <single-review
        class="right"
        value="vsetko super mozem len odporucit :)"
        name="Lukáš K." />
      <single-review
        value="Veľmi šikovný chalan, pomohol mi naučiť sa na test z matiky. 10/10 Ďakujem."
        name="Martin G." />
      <single-review
        class="right"
        value="Maroš mi veľmi pomohol s projektom v C-čku. Odporúčam"
        name="Pavel K." />
      <single-review
        value="Maroš je skvelý developer. Pracoval som s ním na osobnom projekte, kde som potreboval človeka na ktorého sa dalo spoľahnúť. Marošovi som prideľoval úlohy priamo z Kanban boardu a zaradom ich efektívne plnil. Vrelo odporúčam."
        name="Michael J." />
      <single-review
        class="right"
        value="Milý, sympatický chalan, ktorý sa nevzdáva :D. Naozaj sa snaží a pomôže vám. Veľmi časovo flexibilný, čo sa cení, keď sa potrebujete narýchlo stretnúť. Odporúčam"
        name="Monika L." />
      <single-review
        value="Komunikacia s Marosom je fantasticka. Jednoducho, strucne a jasne. Rozsah uciva, terminy, preferencie, uprava casu, spatna vazba. Vsetko toto bolo vynikajuco zabezpecene, seriozny pristup, mily, prijemne profi vystupovanie. Verim, ze sa nanho obratime opat - tentokrat sa jednalo o doslova turbopripravu na prijimacky, ale mame doma este zopar dalsich adeptov na jednorazove alebo aj systematicke doucovanie a podporu. Vrelo odporucam 😊 a dakujeme krasne😊👍"
        name="Michaela B." />
      <single-review
        class="right"
        value="Môj syn sa s vami učí veľmi dobre , je veľmi spokojný . Ste veľmi ochotný , viete vysvetlit tak aby to pochopil, pomáhali ste mu . Ste vynikajuci učiteľ ,ďakujeme veľmi pekne ."
        name="Zili Q." />
      <single-review
        value="Maros was an excellent tutor to my son who was keen to learn coding. He was always well prepared, lessons were engaging with full of focus on what my son wanted to learn. My son had a good understanding of what whey were doing at each lesson and made some good progress. Lessons were in English and I was well impressed how well Maros can speak. I can highly recommend him anytime! Thank you!"
        name="Jana G." />
      <single-review
        class="right"
        value="Super doučovanie, odporúčam. Profesionálny prístup, pochopil som každé jedno vysvetlenie. Ďakujem."
        name="Daniel K." />
      <single-review
        value="Super prístup, vždy pripravený, vie reagovať na otázky. Tému, ktorú preberáme vysvetlí, overí si, či som pochopil a zadá úlohu, ktorú si následne na ďalšej hodine prejdeme. Zatiaľ som veľmi spokojný."
        name="Matej S." />
      <single-review
        class="right"
        value="Skvelý prístup, všetko jasne vysvetlené, za pár minút mi dokázal objasniť učivo s ktorým som si sám nevedel rady. Ochotne odpovedal na otázky ktoré som mu položil a zrozumiteľne ich vysvetlil. Môžem len odporučiť"
        name="Marek C." />
      <single-review
        value="print(“Maroško, nedalo mi to - musím ti ešte raz poďakovať za dnešok. Už dávno som nebol taký nadšený z niečoho, o čom som ešte pred pár hodinami nič nevedel. Tvoja lekcia bola fantastická! Super vysvetlené a si úžasný motivátor. Vďaka za tvoj čas a trpezlivosť. Teším sa na budúcu hodinu 😁”)"
        name="Anonym" />
      <single-review
        class="right"
        value="Veľmi šikovný chalanisko, pomohol mi, vysvetlil a doučil všetko čo som potreboval vedieť. Bol pripravený a žiadna moja otázka ho nezaskočila, odporúčam každému."
        name="Juraj P." />
      <single-review
        value="Zlatý a ohľaduplný chalan, veľmi mi pomohol a vysvetlil mi všetko, čo som potrebovala. Odporúčam všetkými desiatimi."
        name="Aďa H." />
      <single-review
        class="right"
        value="Maroša ako doučovateľa programovania môžem len odporučiť. Časovo flexibilný, vždy všetko podrobne nachystané, ak som niečo nechápal, v kľude vysvetlil viac krát. Bol som veľmi spokojný."
        name="Martin S." />
      <single-review
        value="S Marošom mám doučovanie programovania. Od začiatku sa s ním skvelé komunikuje a je časovo prispôsobivý. Na lekcie je vždy pripravený, všetko vie dobre vysvetliť a dbá na to, aby som veci skúšala sama. Doučko s ním určite odporúčam :)."
        name="Zuzana P." />
      <single-review
        class="right"
        value="Maroš je super chalan, ktorého prístup k učeniu je úžasný. Vždy preberáme učivo dopodrobna a neraz som v triede zažiaril s vedomosťami, ktoré som si z jeho lekcií odniesol. Jeho výklad je pochopiteľný a taktiež sa mi páči, že dokáže odpovedať na otázky, ktoré ma zaujímajú. Maroša odporúčam všetkými desiatimi :D."
        name="Anonym" />
      <single-review
        value="Príjemný mladý chalan, ktorý sa orientuje v tom čo vysvetľuje. Na doučovanie bol vždy perfektne pripravený a jednoducho sa dá dohodnúť na termíne."
        name="Matúš H." />
      <single-review
        class="right"
        value="Spojiť príjemné s užitočným je naozaj super a s Marošom to vôbec nie je problém. Matiku teraz zvládam s ľahkosťou a prehľadom. Hodiny s ním sú naozaj úžasné. Odporúčam."
        name="Adam F." />
      <single-review
        value="Pre človeka ktorý potrebuje vysvetliť .. Doporučujem Maroša :)"
        name="Sebo S." />
      <single-review
        class="right"
        value="Maroš všetko super vysvetlí, je veľmi spoľahlivý a v tom čo robí sa vyzná :) som v prvom ročníku VŠ a doučujem sa programovanie"
        name="Roman S." />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GlitchingText from "./GlitchingTextComponent.vue";
import SingleReview from "./SingleReviewComponent.vue";

export default defineComponent({
  name: "ReviewsComponent",
  components: {
    GlitchingText,
    SingleReview,
  },
});
</script>

<style scoped>
.reviews {
  border-top: 1px solid #444;
  margin-top: 10px;

  text-align: -webkit-center;
}

.title {
  margin-top: 50px;
  margin-bottom: 20px;
  width: 100%;
  padding: 20px;
  font-size: 2rem;
  color: #fff;
}

.reviews-list {
  gap: 20px;
  margin-bottom: 50px;
  max-height: 70vh;
  overflow: auto;
  overflow-x: hidden;
  max-width: 750px;
  text-align: left;
  padding: 0 15px;
}

.right {
  margin-left: auto;
}

.reviews-list::-webkit-scrollbar {
  width: 10px;
}

.reviews-list::-webkit-scrollbar-thumb {
  background-color: #c5c5c5;
  border-radius: 10px;
}

.reviews-list::-webkit-scrollbar-thumb:hover {
  background-color: #aeaeae;
  cursor: pointer;
}

.reviews-list::-webkit-scrollbar-track {
  background-color: #333;
}

@media (max-width: 768px) {
  .reviews-list {
    flex-direction: column;
    align-items: center;
  }
}
</style>
