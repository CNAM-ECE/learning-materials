---
sidebar_position: 2
title: Notation and results
description: One-page summary of operators, standard curves and closed-form bounds used in the learning path.
---

# Notation and results

## Operators

| Symbol | Definition | Name |
| --- | --- | --- |
| $f \otimes g$ | $\inf_{0 \le s \le t} \{ f(t-s) + g(s) \}$ | Min-plus convolution |
| $f \oslash g$ | $\sup_{u \ge 0} \{ f(t+u) - g(u) \}$ | Min-plus deconvolution |
| $\overline{f}$ | $\inf_{n \ge 0} f^{(n)}$ | Sub-additive closure |
| $h(\alpha,\beta)$ | $\sup_{s \ge 0} \inf \{ \tau \ge 0 : \alpha(s) \le \beta(s+\tau) \}$ | Horizontal deviation |
| $v(\alpha,\beta)$ | $\sup_{s \ge 0} \{ \alpha(s) - \beta(s) \}$ | Vertical deviation |

## Standard curves

| Symbol | Definition | Use |
| --- | --- | --- |
| $\gamma_{r,b}(t)$ | $b + rt$ for $t > 0$, $0$ at $t = 0$ | Token-bucket arrival curve |
| $\lambda_C(t)$ | $Ct$ | Peak rate / constant-rate link |
| $\beta_{R,T}(t)$ | $R[t-T]^+$ | Rate-latency service curve |
| $\delta_T(t)$ | $0$ for $t \le T$, $+\infty$ otherwise | Pure delay |
| $L\lceil (t+J)/P \rceil$ | Staircase | Periodic stream with jitter $J$ |

## Definitions

| Concept | Condition |
| --- | --- |
| Arrival curve $\alpha$ | $R \le R \otimes \alpha$ |
| Service curve $\beta$ | $R^* \ge R \otimes \beta$ |
| Strict service curve $\beta$ | Output $\ge \beta(u)$ over any backlogged period of length $u$ |
| Greedy shaper $\sigma$ | $R^* = R \otimes \sigma$ |

## Fundamental results

| Result | Statement |
| --- | --- |
| Backlog bound | $R(t) - R^*(t) \le v(\alpha,\beta)$ |
| Delay bound | $d(t) \le h(\alpha,\beta)$ |
| Output arrival curve | $\alpha^* = \alpha \oslash \beta$ |
| Concatenation | $\beta_{1,2} = \beta_1 \otimes \beta_2$ |
| Blind multiplexing | $\beta_1 = [\beta - \alpha_2]^+$ ($\beta$ strict) |
| FIFO multiplexing | $\beta_1^\theta(t) = [\beta(t) - \alpha_2(t-\theta)]^+ \mathbf{1}_{\{t>\theta\}}$, $\theta \ge 0$ |

## Closed forms (token bucket, rate-latency, $r \le R$)

| Quantity | Value |
| --- | --- |
| Delay bound | $T + b/R$ |
| Backlog bound | $b + rT$ |
| Output arrival curve | $\gamma_{r,\, b + rT}$ |
| Tandem of $n$ servers | $\beta_{\min_i R_i,\, \sum_i T_i}$ |
| Blind residual | $\beta_{C - r_2,\, (CT + b_2)/(C - r_2)}$ |

## Non-preemptive static priority (class $k$, port rate $C$)

$$
d_k = \frac{B_H + L_{lo} + B_k}{C - R_H} + t_{proc}, \qquad R_H + R_k \le C,
$$

$$
b' = b + r\, d_k, \qquad D = \sum_{h \in \mathcal{P}} d_k^{(h)} .
$$

$B_H, R_H$: aggregate burst and rate of higher-priority classes; $L_{lo}$: largest lower-priority frame; $B_k, R_k$: aggregate burst and rate of class $k$; $b'$: output burst; $D$: end-to-end bound over path $\mathcal{P}$ (Total Flow Analysis).

## Time-Aware Shaper window (no guard band)

Gate open $w$ in every cycle $c$, link rate $C$:

$$
\beta(t) = \frac{Cw}{c}\, [\, t - (c - w) \,]^+ .
$$
