import { BookId } from '..';

/**
 * NOTE: BibleSubset values are based on how I am storing subsets in the
 * database.
 */
export const BibleSubset = Object.freeze({
   ALL: 'ALL',
   OT: 'OT',
   NT: 'NT',
   TORAH: 'TORAH',
   WISDOM: 'WISDOM',
   PSALMS: 'PSALMS',
   PROVERBS: 'PROVERBS',
   PROPHETS: 'PROPHETS',
   GOSPELS: 'GOSPELS',
   GOSPELS_ACTS: 'GOSPELS_ACTS',
   LETTERS: 'LETTERS',
});

export const BibleBookNameLength = Object.freeze({
   FULL: 'full',
   SHORT: 'short',
   ABBREVIATED: 'abbr',
});

export const BibleBook = Object.freeze<Record<string, BookId>>({
   GENESIS: 1,
   EXODUS: 2,
   LEVITICUS: 3,
   NUMBERS: 4,
   DEUTERONOMY: 5,
   JOSHUA: 6,
   JUDGES: 7,
   RUTH: 8,
   '1_SAMUEL': 9,
   '2_SAMUEL': 10,
   '1_KINGS': 11,
   '2_KINGS': 12,
   '1_CHRONICLES': 13,
   '2_CHRONICLES': 14,
   EZRA: 15,
   NEHEMIAH: 16,
   ESTHER: 17,
   JOB: 18,
   PSALMS: 19,
   PROVERBS: 20,
   ECCLESIASTES: 21,
   SONG_OF_SONGS: 22,
   ISAIAH: 23,
   JEREMIAH: 24,
   LAMENTATIONS: 25,
   EZEKIEL: 26,
   DANIEL: 27,
   HOSEA: 28,
   JOEL: 29,
   AMOS: 30,
   OBADIAH: 31,
   JONAH: 32,
   MICAH: 33,
   NAHUM: 34,
   HABAKKUK: 35,
   ZEPHANIAH: 36,
   HAGGAI: 37,
   ZECHARIAH: 38,
   MALACHI: 39,
   MATTHEW: 40,
   MARK: 41,
   LUKE: 42,
   JOHN: 43,
   ACTS: 44,
   ROMANS: 45,
   '1_CORINTHIANS': 46,
   '2_CORINTHIANS': 47,
   GALATIANS: 48,
   EPHESIANS: 49,
   PHILIPPIANS: 50,
   COLOSSIANS: 51,
   '1_THESSALONIANS': 52,
   '2_THESSALONIANS': 53,
   '1_TIMOTHY': 54,
   '2_TIMOTHY': 55,
   TITUS: 56,
   PHILEMON: 57,
   HEBREWS: 58,
   JAMES: 59,
   '1_PETER': 60,
   '2_PETER': 61,
   '1_JOHN': 62,
   '2_JOHN': 63,
   '3_JOHN': 64,
   JUDE: 65,
   REVELATION: 66,
});
