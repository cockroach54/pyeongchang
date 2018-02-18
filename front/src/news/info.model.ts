export class Info {
    public player: string;
    public game: string;
    public cursor: number; // 현재 뉴스 종류 인덱스. 아래 newsList의 index
    public gameKind: string; // 게임 세부종목 ex) 1500m, 5000m
    public newsList: string[];
    constructor(){
        this.newsList = ['text','card','movie','text2','card2','movie2'];
        // this.newsList = ['텍스트(선택)','카드(선택)','동영상(선택)','텍스트(전체)','카드(전체)','동영상(전체)'];
        this.cursor = 0;
    }
}
