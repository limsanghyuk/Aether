export const masterQueueCriteria = {
  kdrama: {
    targetCount: 200,
    criteria: "국내외 주요 시상식(백상예술대상, 아시아 콘텐트 어워즈 등) 수상작, 대중성과 작품성(서사 구조의 완결성, DRSE 지수 도달율)을 동시 입증한 작품. 넷플릭스 오리지널을 포함하며, 스릴러, 로맨스, 사극/시대극, SF/판타지, 휴먼/드라마 등 각 장르별 30~50편 선정.",
    sampleList: [
      { id: "kd_thriller_01", title: "시그널", genre: "스릴러/수사", episodes: 16 },
      { id: "kd_thriller_02", title: "비밀의 숲", genre: "스릴러/법정", episodes: 16 },
      { id: "kd_historical_01", title: "미스터 션샤인", genre: "시대극/로맨스", episodes: 24 },
      { id: "kd_drama_01", title: "나의 아저씨", genre: "휴먼/드라마", episodes: 16 },
      { id: "kd_historical_02", title: "옷소매 붉은 끝동", genre: "사극/로맨스", episodes: 17 },
      { id: "kd_fantasy_01", title: "도깨비", genre: "판타지/로맨스", episodes: 16 },
      { id: "kd_thriller_03", title: "괴물", genre: "스릴러/심리", episodes: 16 },
      { id: "kd_netflix_01", title: "오징어 게임", genre: "데스게임/스릴러", episodes: 9 },
      { id: "kd_netflix_02", title: "더 글로리", genre: "복수/스릴러", episodes: 16 }
    ]
  },
  kmovie: {
    targetCount: 100,
    criteria: "청룡영화상, 대종상, 칸 영화제 등 권위있는 국내외 시상식 주요 부문 수상작. 이동진 평론가 등 주요 평단의 평점 및 관객 동원력을 바탕으로 한 철저한 시나리오 극작술 중심 평가.",
    sampleList: [
      { id: "km_01", title: "기생충 (Parasite)", genre: "블랙코미디/스릴러" },
      { id: "km_02", title: "올드보이 (Oldboy)", genre: "미스터리/스릴러" },
      { id: "km_03", title: "살인의 추억 (Memories of Murder)", genre: "범죄/수사" },
      { id: "km_04", title: "곡성 (The Wailing)", genre: "미스터리/오컬트" },
      { id: "km_05", title: "아가씨 (The Handmaiden)", genre: "로맨스/스릴러" }
    ]
  },
  foreignMovie: {
    targetCount: 100,
    criteria: "아카데미 시상식, 칸/베니스/베를린 등 세계 3대 영화제 최고상 수상작. 로튼 토마토 신선도 90% 이상 및 메타크리틱 85점 이상의 상업적/예술적 정점을 이룬 작품. 할리우드 극작술의 교과서적 작품 포함.",
    sampleList: [
      { id: "fm_01", title: "대부 (The Godfather)", genre: "범죄/드라마" },
      { id: "fm_02", title: "다크 나이트 (The Dark Knight)", genre: "액션/히어로" },
      { id: "fm_03", title: "매트릭스 (The Matrix)", genre: "SF/액션" },
      { id: "fm_04", title: "인셉션 (Inception)", genre: "SF/스릴러" },
      { id: "fm_05", title: "쇼생크 탈출 (The Shawshank Redemption)", genre: "드라마" }
    ]
  },
  kNovel: {
    targetCount: 200,
    criteria: "이상문학상, 동인문학상, 젊은작가상 등 주요 문학상 수상작. 문학사적 가치가 높은 고전 및 근현대 소설과, 문장력 및 플롯 전개방식이 뛰어난 밀리언셀러 현대 소설 망라.",
    sampleList: [
      { id: "kn_01", title: "채식주의자", author: "한강", genre: "현대소설" },
      { id: "kn_02", title: "소년이 온다", author: "한강", genre: "현대소설" },
      { id: "kn_03", title: "광장", author: "최인훈", genre: "근대소설" },
      { id: "kn_04", title: "토지", author: "박경리", genre: "대하소설" },
      { id: "kn_05", title: "고래", author: "천명관", genre: "현대소설" }
    ]
  },
  foreignNovel: {
    targetCount: 200,
    criteria: "노벨문학상, 부커상, 퓰리처상, 휴고상 등 세계 최고 권위상 수상작. 스토리의 구조적 완결성과 인간 심리 묘사(DRSE)의 바이블 역할을 하는 정전(Canon)적 소설 및 현대 명작.",
    sampleList: [
      { id: "fn_01", title: "백년의 고독", author: "가브리엘 가르시아 마르케스", genre: "마술적 리얼리즘" },
      { id: "fn_02", title: "1984", author: "조지 오웰", genre: "디스토피아/SF" },
      { id: "fn_03", title: "오만과 편견", author: "제인 오스틴", genre: "로맨스/고전" },
      { id: "fn_04", title: "위대한 개츠비", author: "F. 스콧 피츠제럴드", genre: "문학/고전" },
      { id: "fn_05", title: "눈먼 자들의 도시", author: "주제 사라마구", genre: "현대소설/스릴러" }
    ]
  },
  anime: {
    targetCount: 200,
    criteria: "MyAnimeList (MAL) 기준 평점 S급 역대 명작 및 구조적인 플롯 전개를 갖춘 작품. 단, 나루토/원피스/드래곤볼 등 100회 이상의 초장기 연재물은 서사 밀도의 편차 때문에 철저히 배제. 철저히 1쿨(12화) 혹은 2쿨(24화/26화) 등 분할 시즌제로 밀도있게 완결된 웰메이드 작품만 선정.",
    sampleList: [
      { id: "an_01", title: "진격의 거인 (Attack on Titan)", genre: "다크 판타지/액션", episodes: 89 },
      { id: "an_02", title: "강철의 연금술사: BROTHERHOOD", genre: "다크 판타지", episodes: 64 },
      { id: "an_03", title: "슈타인즈 게이트 (Steins;Gate)", genre: "SF/타임루프", episodes: 24 },
      { id: "an_04", title: "에반게리온 신세기 (Neon Genesis Evangelion)", genre: "SF/메카물", episodes: 26 },
      { id: "an_05", title: "카우보이 비밥 (Cowboy Bebop)", genre: "SF/느와르", episodes: 26 },
      { id: "an_06", title: "바이올렛 에버가든 (Violet Evergarden)", genre: "드라마/판타지", episodes: 13 },
      { id: "an_07", title: "마법소녀 마도카☆마기카", genre: "다크 판타지/마법소녀", episodes: 12 }
    ]
  }
};
