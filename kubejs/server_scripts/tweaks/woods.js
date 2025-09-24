ServerEvents.recipes(reclined => {

    const vanillaLogs = ['oak', 'spruce', 'birch', 'dark_oak', 'jungle', 'acacia', 'mangrove', 'cherry']
    const twilightLogs = ['twilight_oak', 'canopy', 'mangrove', 'dark', 'time', 'transformation', 'mining', 'sorting']
    const woodStems = ['crimson', 'warped', 'fungyss']
    const malumLogs = ['soulwood', 'runewood']
    const forbiddenLogs = ['edelwood']

    function plankRecipes(mod, input) {
        reclined.remove({id: `${mod}:${input}_planks`})
        reclined.shapeless(Item.of(`${mod}:${input}_planks`, 1),
            [`#${mod}:${input}_logs`]).id(`reclined/expert/${mod}/${input}`)
    }
    function plankRecipes2(mod, input) {
        reclined.remove({id: `${mod}:wood/${input}_planks`})
    }
    // Stick Recipe Removal
    reclined.remove({id: 'enderio:stick'})
    // Vanilla Wood
    vanillaLogs.forEach(log => {
        plankRecipes('minecraft', log)
    })
    reclined.remove({id: 'minecraft:crimson_planks'})
    reclined.remove({id: 'minecraft:warped_planks'})
    reclined.shapeless('minecraft:crimson_planks', '#minecraft:crimson_stems')
    reclined.shapeless('minecraft:warped_planks', '#minecraft:warped_stems')
    // Ars Wood
    reclined.remove({id: 'ars_nouveau:archwood_planks'})
    // Twilight Wood
    twilightLogs.forEach(log => {
        plankRecipes2('twilightforest', log)
    })
    // Forbidden Wood
    forbiddenLogs.forEach(log => {
        plankRecipes('forbidden_arcanus', log)
    })
    reclined.remove({id: 'forbidden_arcanus:aurum_planks'})
    reclined.remove({id: 'forbidden_arcanus:fungyss_planks'})
    reclined.shapeless('forbidden_arcanus:aurum_planks', '#forbidden_arcanus:mysterywood_logs')
    reclined.shapeless('forbidden_arcanus:fungyss_planks', '#forbidden_arcanus:fungyss_stems')

    // Malum Wood
    malumLogs.forEach(log => {
        plankRecipes('malum', log)
    })

})