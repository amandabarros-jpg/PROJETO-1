if (!localStorage.getItem('usuarios')){
    const bancoInicial = [
        {usuario: 'admin', senha:'123'},
        {usuario: 'samurai', senha:'15009'}
    ]
    localStorage.setItem('usuarios', JSON.stringify(bancoInicial));

}
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const usuarioDigi = document.getElementById('usuario').value;
    const senhaDigi = document.getElementById('senha').value;
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    const usuarioEncontrado = usuarios.find(function(user){
        return user.usuario === usuarioDigi && user.senha === senhaDigi
    })

    if (usuarioEncontrado){
        alert('Login realizado com sucesso! Seja bem-vindo ' + usuarioDigi)
    } else {
        alert('Usuário ou senha incorretos. Tente novamente')
    }
})

const btnTreinosA = document.getElementById('btnTreinoA');
if(btnTreinoA){
    const usuarioLogin = localStorage.getItem('usuarioLogado');
    if(!usuarioLogado){
        window.location.href = 'index.html';
    }

const treinos = {
    A: {
        titulo: 'Treino A: Peito e Triceps',
        exercicios:[
            'Supino reto - 4x10',
            'Voador - 3x12',
            'Crucifixo inclinado - 3x15',
            'Triceps corda 4x10',
            'Triceps Frances 4x10',
        ]
    },
    B:{
        titulo: 'Treino B: Costas e Biceps',
        exercicios:[
            'Remada Curvada - 4x10',
            'Remada Baixa - 3x12',
            'Rosca Direta - 3x15',
            'Rosca Martelo 4x10',
            'Puxada Frontal 4x10',
        ]
    },
    C: {
        titulo: 'Treino C: Pernas e Ombros',
        exercicios:[
            'Agachamento Livre - 4x10',
            'Leg Press - 3x12',
            'Cadeira Extensora - 3x15',
            'Desenvolvimento halters 4x10',
            'Elevação Lateral 4x10',
        ]
    }
}
}
