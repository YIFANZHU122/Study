const playerAction = process.argv[process.argv.length - 1]


if(playerAction !== 'rock' && playerAction !== 'paper' && playerAction !== 'scissors'){
    console.log('请输入正确的参数')
}else{
    const arr = ['rock','paper','scissors']
    const index = arr.indexOf(playerAction)
    const random = Math.floor(Math.random() * 3)
    if(index === random){
        console.log('平局')
    }else if(index > random){
        console.log('你赢了')
    }else{
        console.log('你输了')
    }
}