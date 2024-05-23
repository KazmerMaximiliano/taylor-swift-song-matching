type SongData = {
  title: string;
  album: string;
  allhappy: number;
  alldate: number;
  selffeel: number;
  glassfull: number;
  stages: number;
  tempo: number;
  seriousness: number;
  future: number;
  malefeel: number;
  together: number;
  embed: string;
};

export class TaylorSwiftMatcher {
  private songs: SongData[] = [];

  constructor(data: string[][]) {
    this.songs = data.slice(2).map((row) => ({
      title: row[0],
      album: row[1],
      allhappy: parseFloat(row[2]),
      alldate: parseFloat(row[3]),
      selffeel: parseFloat(row[4]),
      glassfull: parseFloat(row[5]),
      stages: parseFloat(row[6]),
      tempo: parseFloat(row[7]),
      seriousness: parseFloat(row[8]),
      future: parseFloat(row[9]),
      malefeel: parseFloat(row[10]),
      together: parseFloat(row[11]),
      embed: row[12],
    }));
  }

  matchSong(relationshipInputs: number[], personalFeelings: number[]): string[] {
    const adjustments = [-4, -4, -4, -4];
    const relationshipScores = relationshipInputs.map((input, index) => input + adjustments[index]);
    const feelingScores = personalFeelings.map((input, index) => input + adjustments[index]);

    const errorScores = this.songs.map((song) => {
      const errors = [
        song.selffeel - feelingScores[0],
        song.stages - feelingScores[1],
        song.seriousness - relationshipScores[0],
        song.future - relationshipScores[1],
        song.malefeel - relationshipScores[2],
        song.together - relationshipScores[3],
      ];

      return errors.reduce((sum, err) => sum + err * err, 0);
    });

    const sortedIndices = errorScores
      .map((score, index) => ({ index, score }))
      .sort((a, b) => a.score - b.score)
      .map((val) => val.index);

    return sortedIndices.slice(0, 5).map((index) => `${this.songs[index].embed}`);
  }
}