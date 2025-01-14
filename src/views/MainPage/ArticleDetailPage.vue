<template>
    <div class="Container">
        <div class="header">
            <h1>Article detail</h1>
            <button class="back-button" @click="$router.go(-1)">Back</button>
        </div>
        <h1>The truth behind your $12 dress: Inside the Chinese factories fuelling Shein's success</h1>
        <div class="sub-header">
            <span>13 Jan 2025</span>
            <button class="share-btn">
                <iconify-icon icon="bxs:share" width="24" height="24" />
            </button>
            <button class="save-btn">
                <iconify-icon class="save" icon="fluent:save-copy-20-regular" width="24" height="24" />
            </button>
        </div>
        <p>
            The hum of sewing machines is a constant in parts of Guangzhou, a thriving port on the Pearl River in southern China.
            It rattles through the open windows of factories from morning until late at night, as they finish the t-shirts, shorts, blouses, pants and swimwear that will be shipped to fill wardrobes in more than 150 countries.
            This is the sound of Panyu, the neighbourhood known as the "Shein village", a warren of factories that power the world's largest fast fashion retailer.
            "If there are 31 days in a month, I will work 31 days," one worker told the BBC.
            Most said they only have one day off a month.
            The BBC spent several days here: we visited 10 factories, spoke to four owners and more than 20 workers. We also spent time at labour markets and textile suppliers.
            We found that the beating heart of this empire is a workforce sitting behind sewing machines for around 75 hours a week in contravention of Chinese labour laws.
            These hours are not unusual in Guangzhou, an industrial hub for rural workers in search of a higher income; or in China, which has long been the world's unrivalled factory.
            But they add to a growing list of questions about Shein, once a little-known Chinese-founded company that has become a global behemoth in just over five years.
            Still privately-owned, it was valued at about £54bn ($66bn) in a fundraising round in 2023. It is now eyeing a potential listing on the London Stock Exchange.
            Its meteoric rise, however, has been dogged with controversy about its treatment of workers and allegations of forced labour.
            Last year it admitted to finding children working in its factories in China.
            The company declined to be interviewed but told the BBC in a statement that "Shein is committed to ensuring the fair and dignified treatment of all workers within our supply chain" and is investing tens of millions of dollars in strengthening governance and compliance.
            It added: "We strive to set the highest standards for pay and we require that all supply chain partners adhere to our code of conduct. Furthermore, Shein works with auditors to ensure compliance."
            Shein's success lies in volume - the inventory online runs into the hundreds of thousands - and deep discounts: £10 dresses, £6 sweaters, prices that hover below £8 on average.
            Revenue has soared, outstripping the likes of H&M, Zara and the UK's Primark. The cut-price sales are driven by places like the Shein village, home to some 5,000 factories, most of them Shein suppliers.
            The buildings have been hollowed out to make way for sewing machines, rolls of fabric and bags brimming with cloth scraps. The doors to their basements are always open for the seemingly endless cycle of deliveries and collections.
            As the day passes, the shelves fill up with warehouse-bound, clear plastic bags labelled with a now-distinctive five-letter noun.
            But even past 22:00, the sewing machines - and the people hunched over them - don't stop as more fabric arrives, in trucks so full that bolts of colour sometimes tumble onto the factory floor.
            "We usually work, 10, 11 or 12 hours a day," says a 49-year-old woman from Jiangxi unwilling to give her name. "On Sundays we work around three hours less."
            She is in an alleyway, where a dozen people are huddled around a row of bulletin boards.
            They are reading the job ads on the board, while examining the stitching on a pair of chinos draped over it.
            This is Shein's supply chain. The factories are contracted to make clothes on order - some small, some big. If the chinos are a hit, orders will ramp up and so must production. Factories then hire temporary workers to meet the demand their permanent staff cannot fulfil.
            The migrant worker from Jiangxi is looking for a short-term contract - and the chinos are an option.
            "We earn so little. The cost of living is now so high," she says, adding that she hopes to make enough to send back to her two children who are living with their grandparents.
            "We get paid per piece," she explains. "It depends how difficult the item is. Something simple like a t-shirt is one-two yuan [less than a dollar] per piece and I can make around a dozen in an hour."
            Examining the stitching on the chinos is crucial for making that decision. All around her, workers are calculating how much they will get paid to make each piece of clothing and how many they can make in an hour.
            The alleys of Panyu function as labour markets, filling up in the mornings as workers and scooters rush past the breakfast dumpling cart, the cups of steaming soybean milk and the hopeful farmer selling chicken and duck eggs.
        </p>
        
    </div>
</template>

<script>
</script>

<style scoped>
h1{
    padding-inline: 5rem;
}
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: "Inter";
}
.Container{
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    padding-inline: 5rem;
    font-size: 17px;
    font-family: "Inter";   
}
.sub-header{
    padding-inline: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.75rem;
}
span{
    margin-right: 30px;
}
.back-button,
.share-btn,
.save-btn{
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    font-weight: bold;
    font-size: 25px;
}
p{
    padding-inline: 10rem;
    line-height: 2rem;
}
</style>