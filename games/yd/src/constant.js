var Colors = {
    RED: 1,
    YELLOW: 2,
    BLUE: 3,
    GREEN: 4,
    PURPLE: 5
};
var Levels = [
    {
        score: 50
    },
    {
        score: 55
    },
    {
        score: 60
    },
    {
        score: 65
    },
    {
        score: 70
    },
    {
        score: 75
    },
    {
        score: 80
    },
    {
        score: 85
    },
    {
        score: 90
    },
    {
        score: 95
    },
    {
        score: 100
    },
    {
        score: 105
    },
    {
        score: 110
    },
    {
        score: 115
    },
    {
        score: 120
    },
    {
        score: 125
    },
    {
        score: 130
    },
    {
        score: 135
    },
    {
        score: 140
    },
    {
        score: 145
    },
    {
        score: 150
    },
    {
        score: 155
    },
    {
        score: 160
    },
    {
        score: 165
    },
    {
        score: 170
    },
    {
        score: 175
    },
    {
        score: 180
    },
    {
        score: 185
    },
    {
        score: 190
    },
    {
        score: 195
    }
];
var Localize = {
    'en': {
        'loading': '加载中',
        'goal': '在60秒内达到关卡要求的分数才能过关。',
        'start': '开始游戏',
        'scoreNeeded': '过关分数',
        'begin': '开始',
        'level': '关卡',
        'time': '时间',
        'score': '分数',
        'passed': '过关',
        'failed': '失败',
        'yourScore': '你的得分',
        'playAgain': '再玩一次',
        'next': '下一关',
        'share': '分享',
        'clear': '清除',
        'stop': '时间静止5秒',
        'single1': '消除一个圆点',
        'single2': '双击一个圆点可以快速消除',
        'same': '消除一种相同颜色的圆点',
        'htp': '怎么玩？',
        'htp2': '连击相同颜色的圆点',
        'htp31': '如果你连成一个环',
        'htp32': '所有相同颜色的圆点都会消失',
        'shop': '商店',
        'buy': '购买',
        'tools': '道具'
    },
    'de': {
        'loading': 'Lädt',
        'goal': 'Du musst innerhalb von 60 Sekunden eine bestimmte Punktzahl erreichen, um das Level beenden zu können.',
        'start': 'Spiel beginnen',
        'scoreNeeded': 'Benötigte Punkte, um das Level zu beenden',
        'begin': 'Beginnen',
        'level': 'Level',
        'time': 'Zeit',
        'score': 'Punktzahl',
        'passed': 'Geschafft!',
        'failed': 'Nicht geschafft.',
        'yourScore': 'Deine Punktzahl',
        'playAgain': 'Noch einmal',
        'next': 'Weiter',
        'share': 'Teilen',
        'clear': 'Löschen',
        'stop': 'Zeit für 5 Sekunden angehalten',
        'single1': 'Select a dot to shrink off the board',
        'single2': 'Double tap a dot to quickly shrink',
        'same': 'Klicke einen farbigen Punkt an, um ihn verschwinden zu lassen',
        'htp': 'Anleitung',
        'htp2': 'Verbinde gleichfarbige Punkte',
        'htp31': 'Bilde eine geschlossene Schleife',
        'htp32': 'um alle Punkte einer Farbe verschwinden zu lassen',
        'shop': 'Geschäft',
        'buy': 'kaufen',
        'tools': 'Werkzeuge'
    },
    'es': {
        'loading': 'Cargando',
        'goal': 'Debes lograr cierta puntuación en 60 segundos para superar el nivel.',
        'start': 'Empezar partida',
        'scoreNeeded': 'Puntos necesarios para pasar',
        'begin': 'Comenzar',
        'level': 'Nivel',
        'time': 'Tiempo',
        'score': 'Puntos',
        'passed': 'Superado',
        'failed': 'Has fallado',
        'yourScore': 'Tus puntos',
        'playAgain': 'Juega otra vez',
        'next': 'Siguiente',
        'share': 'Compartir',
        'clear': 'Borrar',
        'stop': 'Tiempo parado 5 segundos',
        'single1': 'Selecciona un punto para reducir el tablero',
        'single2': 'Toca dos veces un punto para reducir rápido',
        'same': 'Selecciona un punto de color para borrarlo',
        'htp': 'Cómo jugar',
        'htp2': 'Conecta puntos del mismo color',
        'htp31': 'Si formas un bucle',
        'htp32': 'todos los puntos del mismo color desaparecerán',
        'shop': 'Tienda',
        'buy': 'Comprar',
        'tools': 'Herramientas'
    },
    'fr': {
        'loading': 'Chargement en cours',
        'goal': 'Vous devez atteindre un certain score en 60 secondes pour passer le niveau.',
        'start': 'Démarrer le jeu',
        'scoreNeeded': 'Score nécessaire pour passer',
        'begin': 'commencer',
        'level': 'niveau',
        'time': 'temps',
        'score': 'score',
        'passed': 'passé',
        'failed': 'échoué',
        'yourScore': 'votre score',
        'playAgain': 'Rejouer',
        'next': 'Suivant',
        'share': 'Partager',
        'clear': 'Effacer',
        'stop': 'Le temps a été arrêté pendant 5 secondes',
        'single1': 'Sélectionnez un point à supprmier du plateau',
        'single2': 'Appuyez deux fois sur un point pour l\'enlever rapidement',
        'same': 'Sélectionnez un point coloré pour l\'enlever',
        'htp': 'Comment jouer',
        'htp2': 'Connectez les points de la même couleur',
        'htp31': 'Si vous formez une boucle',
        'htp32': 'tous les points de la même couleur disparaîtront',
        'shop': 'boutique',
        'buy': 'acheter',
        'tools': 'outils'
    },
    'it': {
        'loading': 'Caricamento in corso',
        'goal': 'Devi raggiungere un certo punteggio in 60 secondi per poter superare il livello.',
        'start': 'Inizia il gioco',
        'scoreNeeded': 'Punteggio necessario per passare',
        'begin': 'Inizia',
        'level': 'Livello',
        'time': 'Tempo',
        'score': 'Punteggio',
        'passed': 'Superato',
        'failed': 'Fallito',
        'yourScore': 'Il tuo punteggio',
        'playAgain': 'Gioca ancora',
        'next': 'Avanti',
        'share': 'Condividi',
        'clear': 'Completo',
        'stop': 'Il tempo sarà fermo per 5 secondi',
        'single1': 'Seleziona un punto per farlo indietreggiare fuori dalla tabella',
        'single2': 'Premi due volte un punto per indietreggiare rapidamente',
        'same': 'Seleziona un punto colorato per rimuoverlo',
        'htp': 'Come si gioca',
        'htp2': 'Collega i puntini dello stesso colore',
        'htp31': 'Se formi una catena tutti',
        'htp32': 'i punti dello stesso colore spariranno',
        'shop': 'negozio',
        'buy': 'acquistare',
        'tools': 'Strumenti'
    },
    'pt': {
        'loading': 'A carregar',
        'goal': 'Tens que atingir uma certa pontuação em 60 segundos para passares de nível.',
        'start': 'Iniciar Jogo',
        'scoreNeeded': 'Pontuação necessária para passar',
        'begin': 'Início',
        'level': 'Nível',
        'time': 'Tempo',
        'score': 'Pontuação',
        'passed': 'Passaste',
        'failed': 'Falhaste',
        'yourScore': 'A tua pontuação',
        'playAgain': 'Jogar Novamente',
        'next': 'Seguinte',
        'share': 'Partilhar',
        'clear': 'Limpar',
        'stop': 'Tempo parado por 5 segundos',
        'single1': 'Seleciona um ponto para encolher o tabuleiro',
        'single2': 'Toca duas vezes para encolher rapidamente',
        'same': 'Seleciona um ponto colorido para o excluir',
        'htp': 'Como jogar',
        'htp2': 'Liga pontos da mesma cor',
        'htp31': 'Se formares um loop',
        'htp32': 'desaparecerão todos os pontos da mesma cor',
        'shop': 'loja',
        'buy': 'Compre',
        'tools': 'Ferramentas'
    },
    'ru': {
        'loading': 'Загрузка',
        'goal': 'Вы должны набрать определенное количество очков за 60 секунд для прохождения уровня.',
        'start': 'Начать игру',
        'scoreNeeded': 'Количество очков, необходимое для прохождения',
        'begin': 'Начать',
        'level': 'Уровень',
        'time': 'Время',
        'score': 'Очки',
        'passed': 'Пройдено',
        'failed': 'Не пройдено',
        'yourScore': 'Ваши очки',
        'playAgain': 'Играть еще раз',
        'next': 'Далее',
        'share': 'Поделиться',
        'clear': 'Очистить',
        'stop': 'Время остановилось на 5 секунд.',
        'single1': 'Выбрать точку, чтобы уменьшить доску',
        'single2': 'Двойное нажатие на точку для быстрого уменьшения',
        'same': 'Выбрать цветную точку, чтобы ее удалить',
        'htp': 'Как играть',
        'htp2': 'Соединить точки одного цвета',
        'htp31': 'При формировании петли',
        'htp32': 'исчезнут все точки одного цвета',
        'shop': 'Магазин',
        'buy': 'Купить',
        'tools': 'инструменты'
    },
    'tk': {
        'loading': 'Yüklüyor',
        'goal': 'Seviyeyi geçebilmek için 60 saniye içinde belirli bir skora ulaşman gerekiyor.',
        'start': 'Oyunu Başlat',
        'scoreNeeded': 'Geçmek için gerekli skor',
        'begin': 'Başla',
        'level': 'Seviye',
        'time': 'Süre',
        'score': 'Skor',
        'passed': 'Geçildi',
        'failed': 'Başarısız',
        'yourScore': 'Skorun',
        'playAgain': 'Tekrar Oyna',
        'next': 'İleri',
        'share': 'Paylaş',
        'clear': 'Temizle',
        'stop': 'Süre 5 saniye durduruldu',
        'single1': 'Panoyu çekmek için bir nokta seç',
        'single2': 'Hızla çekmek için bir noktaya iki kez dokun',
        'same': 'Renkli bir noktayı seçerek yok et',
        'htp': 'Nasıl oynanır',
        'htp2': 'Aynı renkteki noktaları birleştir',
        'htp31': 'Bir bağ oluşturduğunuzda',
        'htp32': 'aynı renkteki noktalar yok olur',
        'shop': 'Dükkan',
        'buy': 'satın',
        'tools': 'Araçlar'
    }
}