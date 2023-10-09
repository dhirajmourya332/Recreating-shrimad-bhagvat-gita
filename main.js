const fs = require("node:fs");

const all_english_shloka = [];

const root_dir = "./gita_shlokas";
const gita_directory = fs.readdirSync(root_dir);
gita_directory.forEach((chapter_directory) => {
  const chapter = fs.readdirSync(root_dir + "/" + chapter_directory);
  chapter.forEach((verse_file) => {
    const verse_json = fs.readFileSync(
      root_dir + "/" + chapter_directory + "/" + verse_file,
      {
        encoding: "utf-8",
      }
    );
    const verse = JSON.parse(verse_json);
    verse["auths_trans"].forEach((auth_trans) => {
      if (auth_trans.hasOwnProperty("et")) {
        if (!auth_trans["et"].match(/(did not comment)|(See Comment under)/)) {
          auth_trans["et"] = auth_trans["et"].toLowerCase();
          auth_trans["et"] = auth_trans["et"].replace("\n", " ");
          auth_trans["et"] = auth_trans["et"].replace('"', "'");
          auth_trans["et"] = auth_trans["et"].replace("–", "-");
          auth_trans["et"] = auth_trans["et"].replace("’", "'");
          auth_trans["et"] = auth_trans["et"].replace(
            /[\d]+\.[\d]+\.*( )*\-*( )*[\d]*\.*[\d]*\.*/,
            ""
          );
          all_english_shloka.push(auth_trans["et"]);
        }
      }
    });
  });
});

fs.writeFileSync("./shloka_all.json", JSON.stringify(all_english_shloka));
