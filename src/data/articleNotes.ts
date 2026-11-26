/**
 * The articles kept in ressource/ and the Article notes pages built from them.
 * Used by the ArticleNotesCard component, which links a Research understanding
 * post to the notes on the same standard, and by the script that lists the
 * articles in the post references.
 */
export type ArticleKey = 'LS19' | 'YSH19' | 'XZZ23' | 'GPB22' | 'RFC8655';

export const articles: Record<ArticleKey, {cite: string; url: string}> = {
  LS19: {
    cite: 'L. Lo Bello, W. Steiner, “A Perspective on IEEE Time-Sensitive Networking for Industrial Communication and Automation Systems,” Proceedings of the IEEE, 2019',
    url: 'https://doi.org/10.1109/JPROC.2019.2905334',
  },
  YSH19: {
    cite: 'X. Yang, D. Scholz, M. Helm, “Deterministic Networking (DetNet) vs Time Sensitive Networking (TSN),” TU Munich seminar, 2019',
    url: 'https://doi.org/10.2313/NET-2019-10-1_15',
  },
  XZZ23: {
    cite: 'C. Xue et al., “Real-Time Scheduling for 802.1Qbv Time-Sensitive Networking (TSN): A Systematic Review and Experimental Study,” arXiv:2305.16772, 2023',
    url: 'https://arxiv.org/abs/2305.16772',
  },
  GPB22: {
    cite: 'V. Gavriluţ, A. Pruski, M. S. Berger, “Constructive or Optimized: An Overview of Strategies to Design Networks for Time-Critical Applications,” ACM Computing Surveys, 2022',
    url: 'https://doi.org/10.1145/3501294',
  },
  RFC8655: {
    cite: 'N. Finn, P. Thubert, B. Varga, J. Farkas, RFC 8655, “Deterministic Networking Architecture,” IETF, 2019',
    url: 'https://www.rfc-editor.org/rfc/rfc8655',
  },
};

export type NotesPageId =
  | 'ieee-802-1q-bridge'
  | 'ieee-802-1as'
  | 'ieee-802-1qav'
  | 'ieee-802-1qbv'
  | 'ieee-802-1qbu-802-3br'
  | 'ieee-802-1qch-qcr'
  | 'ieee-802-1qci'
  | 'ieee-802-1cb'
  | 'ieee-802-1qcc'
  | 'tsn-network-design'
  | 'tsn-profiles'
  | 'ietf-detnet';

export const notesPages: Record<NotesPageId, {title: string; sources: ArticleKey[]}> = {
  'ieee-802-1q-bridge': {title: '802.1Q bridge and the TSN toolbox', sources: ['LS19', 'YSH19']},
  'ieee-802-1as': {title: '802.1AS time synchronisation', sources: ['LS19', 'YSH19', 'XZZ23']},
  'ieee-802-1qav': {title: '802.1Qav credit-based shaper', sources: ['YSH19', 'LS19', 'GPB22']},
  'ieee-802-1qbv': {title: '802.1Qbv time-aware shaper', sources: ['LS19', 'XZZ23', 'GPB22']},
  'ieee-802-1qbu-802-3br': {title: '802.3br and 802.1Qbu frame preemption', sources: ['LS19', 'YSH19']},
  'ieee-802-1qch-qcr': {title: '802.1Qch and 802.1Qcr', sources: ['LS19', 'YSH19']},
  'ieee-802-1qci': {title: '802.1Qci per-stream filtering and policing', sources: ['LS19']},
  'ieee-802-1cb': {title: '802.1CB frame replication and elimination', sources: ['LS19', 'YSH19']},
  'ieee-802-1qcc': {title: '802.1Qcc configuration models', sources: ['LS19']},
  'tsn-network-design': {title: 'Network design and configuration synthesis', sources: ['GPB22']},
  'tsn-profiles': {title: 'TSN profiles and use cases', sources: ['LS19', 'YSH19']},
  'ietf-detnet': {title: 'IETF DetNet (RFC 8655)', sources: ['RFC8655', 'YSH19', 'LS19']},
};
